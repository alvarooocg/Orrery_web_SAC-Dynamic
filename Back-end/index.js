require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})