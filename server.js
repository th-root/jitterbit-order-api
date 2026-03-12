require("dotenv").config()

const express = require("express")
const connectDB = require("./src/database/db")
const orderRoutes = require("./src/routes/orderRoutes")

const app = express()

app.use(express.json())

connectDB()

app.get("/", (req, res) => {
    res.send("API de pedidos funcionando 🚀")
})

app.use("/api", orderRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})