import express from 'express'
import cors from 'cors'
import { start } from './scrapping.js'

const app = express()
app.use(cors())

app.get('/:objeto', async (req, res) => {
    const {objeto} = req.params
    let response = await start(objeto)
    res.json(response)
})

app.listen(3001)