import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { chromium } = require('playwright')
const prompt = require("prompt-sync")()

/*const shops = [
    {
        vendor: 'Amazon',
        url: 'https://www.amazon.com/s?k=',
        searchItem: async ({browser, url, item}) => {
            const page = await browser.newPage()
            await page.goto(url + item)
            await page.screenshot({ path: 'busqueda.png'})
        }
    }
]*/

;(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    let item = prompt("Objeto buscado: ", "")
    console.log(item)
    var newItem = item.replace(/ /g, "+")

    await page.goto('https://www.amazon.com/s?k=' + newItem)
    await page.screenshot({ path: 'item.png' })

    await browser.close()
})()