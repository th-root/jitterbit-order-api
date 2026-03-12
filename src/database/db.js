const mongoose = require("mongoose")

async function connectDB() {

    try {

        await mongoose.connect(process.env.MONGO_URI)

        console.log("MongoDB conectado")

    } catch (error) {

        console.error("Erro ao conectar no banco:", error)

    }

}

module.exports = connectDB