const mongoose = require('mongoose')
const { Schema } = mongoose


// schema
const InventorySchema = new Schema({
    company: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    sku: { type: String, required: true },
    qty: { type: Number, required: false }
})

const Inventory = mongoose.model('Inventory', InventorySchema)
module.exports = Inventory
