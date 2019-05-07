const express = require('express')
const app = express()

app.use(express.urlencoded({
    
}))


const { createServer } = require('http')

createServer((req, res) => {
    res.end('<h1>Hello World</h1>')
}) .listen(3000)
console.log('Success')