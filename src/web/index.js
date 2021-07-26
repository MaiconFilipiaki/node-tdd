const express = require('express')
const messages = require('./messages')

const app = express()

app.get('/', (req, res) => {
    res.send({message: messages.testingUnit })
})

app.get('/createAndUpdate', (req, res) => {
    if (req.query.operation === 'UPDATE') {
        res.send({message: messages.update})
    } else if (req.query.operation === 'REGISTER') {
        res.send({message: messages.register})
    } else {
        res.status(400).send({ message: messages.operationNotAllowed })
    }
})

const server = app.listen(3000, () => {
    console.log('🚀 SERVER ON')
})
module.exports = server;
