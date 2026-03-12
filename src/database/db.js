const mongoose = require("mongoose")

async function connectDB() {

    try {

        await mongoose.connect(
            "mongodb://thiago:yhwh@ac-bfrnntq-shard-00-00.po946yg.mongodb.net:27017,ac-bfrnntq-shard-00-01.po946yg.mongodb.net:27017,ac-bfrnntq-shard-00-02.po946yg.mongodb.net:27017/?ssl=true&replicaSet=atlas-93uud9-shard-0&authSource=admin&appName=Clusterjitterbitorderapi"
        )

        console.log("MongoDB conectado")

    } catch (error) {

        console.error("Erro ao conectar no banco:", error)

    }

}

module.exports = connectDB