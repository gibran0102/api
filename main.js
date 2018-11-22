import Express from 'express'
import router from './api/router'
import mongoose from 'mongoose'
import ConnectDB from './db'

const bodyParser = require('body-parser')

const PORT = process.env.PORT || 8080
const app = Express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

ConnectDB()    



app.use('/api', router)

app.listen(PORT, (err) => {
    if (err) return process.exit(1)
    console.log('Servidor corriendo en el puerto 8080')

})