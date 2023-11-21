import { createRequire } from "module"
const require = createRequire(import.meta.url)
const { chromium } = require('playwright')
const prompt = require("prompt-sync")()

let data = []

const shops = [
    /* {
        vendor: 'Amazon',
        url: 'https://www.amazon.com.mx/s?k=',
        searchItem: async ({ browser, url, item }) => {
            let localItem = item.replace("%", "+")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.a-size-mini.a-spacing-none.a-color-base > a', elements => elements.map(e => e.href))

            for (let index = 0; index < 3; index++) {
                await page.goto(content[index])

                let titleItem = await page.$eval('.a-size-large.product-title-word-break', el => el.textContent)
                let imgItem = await page.$eval('#landingImage', el => el.src)
                let priceItem
                try {
                    priceItem = await page.$eval('.a-section.a-spacing-none.aok-align-center.aok-relative .a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay', el => el.textContent)
                } catch (error) {
                    priceItem = 'Precio no disponible'
                }
                //let rateItem = await page.$eval('.a-declarative .a-size-base.a-color-base', el => el.textContent)

                const descriptionItem = {
                    titleItem: titleItem,
                    imgItem: imgItem,
                    priceItem: priceItem,
                    //rateItem: rateItem,
                    urlItem: (content[index])
                }

                data.push(descriptionItem)
            }

            await page.close()
        }
    },*/
    {
        vendor: 'Sanborns',
        url: 'https://www.sanborns.com.mx/resultados?query=',
        searchItem: async ({ browser, url, item }) => {
            let localItem = item.replace("%", "+")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.cardProduct > a', elements => elements.map(e => e.href))

            for (let index = 0; index < 5; index++) {
                await page.goto(content[index])

                let titleItem = await page.$eval('.stylesShopData_h2__7UK6k', el => el.textContent)
                let imgItem = await page.$eval('.stylesSliderProductoDesktop_imagenActual__x9_VZ', el => el.src)
                let priceItem
                try {
                    priceItem = await page.$eval('.stylesDataPrice_pPrice__Go68G', el => el.textContent)
                } catch (error) {
                    priceItem = 'Precio no disponible'
                }

                let rateItem = await page.$eval('#acrPopover .a-size-base.a-color-base', el => el.textContent)

                const descriptionItem = {
                    titleItem: titleItem,
                    imgItem: imgItem,
                    priceItem: priceItem,
                    urlItem: (content[index])
                }

                data.push(descriptionItem)
            }

            await page.close()
        }
    },
    {
        vendor: 'Mercadolibre',
        url: 'https://listado.mercadolibre.com.mx/',
        searchItem: async ({ browser, url, item }) => {
            let localItem = item.replace("%", "-")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.ui-search-item__group__element.ui-search-link', elements => elements.map(e => e.href))

            for (let index = 3; index < 8; index++) {
                await page.goto(content[index])

                let titleItem = await page.$eval('.ui-pdp-title', el => el.textContent)
                let imgItem = await page.$eval('.ui-pdp-image.ui-pdp-gallery__figure__image', el => el.src)
                let priceItem = await page.$eval('.ui-pdp-price__second-line .andes-money-amount__fraction', el => '$' + el.textContent)
                let rateItem

                try {
                    rateItem = await page.$eval('.ui-pdp-review__rating', el => el.textContent)
                } catch (error) {
                    rateItem = 'Prodcuto sin calificar'
                }

                const descriptionItem = {
                    titleItem: titleItem.trim(),
                    imgItem: imgItem,
                    priceItem: priceItem,
                    rateItem: rateItem.trim(),
                    urlItem: (content[index])
                }

                data.push(descriptionItem)
            }

            await page.close()
            return (true)
        }
    }
]

export const start = async (item) => {

    let finalData = []
    const browser = await chromium.launch()

    for (const shop of shops) {
        const { searchItem, url } = shop
        await searchItem({ browser, url, item })
    }

    finalData = structuredClone(data)
    data = []

    await browser.close()
    return(finalData)
}