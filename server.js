const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    console.log(req.query)
    resp.send(`<h1> Parab�ns. Usu�rio inclu�do!! </h1>`)
})

app.listen(3003)
