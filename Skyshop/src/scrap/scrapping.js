import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { chromium } = require('playwright')
const prompt = require("prompt-sync")()

const shops = [
    {
        vendor: 'Amazon',
        url: 'https://www.amazon.com.mx/s?k=',
        searchItem: async ({browser, url, item}) => {
            let localItem = item.replace(/ /g, "+")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.a-size-mini.a-spacing-none.a-color-base > a', elements => elements.map(e => e.href))

            for (let index = 0; index < 3; index++) {
                await page.goto(content[index])
                await page.screenshot({ path: `screenshots/amazon/${item + ' ' + (index+1)}.png`})
            }

            await page.close()
            return(true)
        }
    },
    {
        vendor: 'Ebay',
        url: 'https://www.ebay.com/sch/i.html?_nkw=',
        searchItem: async ({browser, url, item}) => {
            let localItem = item.replace(/ /g, "+")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.s-item__link', elements => elements.map(e => e.href))

            for (let index = 1; index < 4; index++) {
                await page.goto(content[index])
                await page.screenshot({ path: `screenshots/ebay/${item + ' ' + (index)}.png`})
            }

            await page.close()
            return(true)
        }
    },
    {
        vendor: 'Mercadolibre',
        url: 'https://listado.mercadolibre.com.mx/',
        searchItem: async ({browser, url, item}) => {
            let localItem = item.replace(/ /g, "-")

            const page = await browser.newPage()
            await page.goto(url + localItem)

            const content = await page.$$eval('.ui-search-item__group__element.ui-search-link', elements => elements.map(e => e.href))

            for (let index = 3; index < 6; index++) {
                await page.goto(content[index])
                await page.screenshot({ path: `screenshots/mercadolibre/${item + ' ' + (index - 2)}.png`})
            }

            await page.close()
            return(true)
        }
    }
]

;(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 20})

    let item = prompt("Objeto buscado: ", "")
    console.log(item)
    
    for (const shop of shops) {
        const { searchItem, vendor, url } = shop
        const scrap = await searchItem({ browser, url, item})
        console.log(`${vendor}: ${scrap}`)
    }

    await browser.close()
})()