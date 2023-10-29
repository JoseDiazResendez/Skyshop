import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { chromium } = require('playwright')
const prompt = require("prompt-sync")()

const shops = [
    {
        vendor: 'Amazon',
        url: 'https://www.amazon.com.mx/s?k=',
        searchItem: async ({browser, url, item}) => {
            item = item.replace(/ /g, "+")

            const page = await browser.newPage()
            await page.goto(url + item)
            await page.screenshot({ path: `screenshots/amazon/${item}.png`})
            return(true)
        }
    },
    {
        vendor: 'Ebay',
        url: 'https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=',
        searchItem: async ({browser, url, item}) => {
            item = item.replace(/ /g, "+")

            const page = await browser.newPage()
            await page.goto(url + item)
            await page.screenshot({ path: `screenshots/ebay/${item}.png`})
            return(true)
        }
    },
    {
        vendor: 'Mercadolibre',
        url: 'https://listado.mercadolibre.com.mx/',
        searchItem: async ({browser, url, item}) => {
            item = item.replace(/ /g, "-")

            const page = await browser.newPage()
            await page.goto(url + item)
            await page.screenshot({ path: `screenshots/mercadolibre/${item}.png`})
            return (true)
        }
    }
]

;(async () => {
    const browser = await chromium.launch()

    let item = prompt("Objeto buscado: ", "")
    console.log(item)
    
    for (const shop of shops) {
        const { searchItem, vendor, url } = shop
        const foto = await searchItem({ browser, url, item})
        console.log(`${vendor}: ${foto}`)
    }

    await browser.close()
})()