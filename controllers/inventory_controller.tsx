const express = require('express')
const inventory = express.Router()
const Inventory = require('../models/inventory')
const inventorySeedData = require('../models/inventory_seed')

//Home
inventory.get('/HomePage', (req, res) => {
    Inventory.find()
        .then(res.render('HomePage', {
            inventory: foundInventory,
            title: 'Home Page'
        }))
})

//SEED
inventory.get('/data/seed', (req, res) => {
    Inventory.insertMany([
        {
            company: 'Keen',
            name: 'Atlanta',
            type: 'mens',
            size: '8',
            sku: '1023218',
            qty: 5
        },
        {
            company: 'Keen',
            name: 'Braddock',
            type: 'mens',
            size: '9',
            sku: '1020162',
            qty: 2
        },
        {
            company: 'Keen',
            name: 'Pittsburgh',
            type: 'mens',
            size: '9.5',
            sku: '1009709',
            qty: 0
        },
        {
            company: 'Keen',
            name: 'Detroit',
            type: 'mens',
            size: '10',
            sku: '1020039',
            qty: 1
        },
        {
            company: 'Keen',
            name: 'PTC 5/0',
            type: 'mens',
            size: '10.5',
            sku: '1006983',
            qty: 6
        },
        {
            company: 'Keen',
            name: 'Birmingham',
            type: 'mens',
            size: '10.5',
            sku: '1026360',
            qty: 4
        },
        {
            company: 'Keen',
            name: 'Flint',
            type: 'mens',
            size: '8',
            sku: '1023268',
            qty: 0
        },
        {
            company: 'Keen',
            name: 'Vista',
            type: 'mens',
            size: '10',
            sku: '1026371',
            qty: 5
        },
    ])
        .then(res.redirect('/HomePage'))
})

// CREATE
inventory.post('/', (req, res) => {
    Inventory.create(req.body)
    res.redirect('/homepage')
})

// NEW
inventory.get('/new', (req, res) => {
    Inventory.find()
        .then(foundInventory => {
            res.render('/new')
        })
})

// EDIT
inventory.get('/:id/edit', (req, res) => {
    Inventory.find()
        .then(foundInventory => {
            Inventory.findById(req.params.id)
                .then(foundInventory => {
                    res.render('edit')
                })
        })
})

// SHOW
inventory.get('/:id', (req, res) => {
    Inventory.findById(req.params.id)
        .then(foundInventory => {
            res.render('show', {
                inventory: foundInventory
            })
        })
        .catch(err => {
            res.send('404')
        })
})

//UPDATE
inventory.put('/:id', (req, res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedInventory => {
            console.log(updatedInventory)
            res.redirect(`/inventory/${req.params.id}`)
        })
})

// DELETE
inventory.delete('/:id', (req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(deleteInventory => {
            res.status(303).redirect('/inventory')
        })
})

// Export
module.exports = inventory
