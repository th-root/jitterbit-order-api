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

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000")

})