const Order = require("../models/Order")

// criar pedido
exports.createOrder = async (req, res) => {

    try {

        const order = new Order(req.body)

        const savedOrder = await order.save()

        res.status(201).json(savedOrder)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

}


// listar pedidos
exports.getOrders = async (req, res) => {

    try {

        const orders = await Order.find()

        res.json(orders)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

}


// buscar pedido por ID
exports.getOrderById = async (req, res) => {

    try {

        const order = await Order.findById(req.params.id)

        if (!order) {

            return res.status(404).json({ message: "Pedido não encontrado" })

        }

        res.json(order)

    } catch (error) {

        res.status(500).json({ error: error.message })

    }

}