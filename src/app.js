const express = require("express")
const cors = require("cors")

const connectDB = require("./database/db")
const orderRoutes = require("./routes/orderRoutes")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/order", orderRoutes)

module.exports = app