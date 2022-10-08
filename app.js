// source https://levelup.gitconnected.com/how-to-start-every-full-stack-project-7c92e07f8693
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());
app.get("/api", async (req, res) => {
res.send({ data: "received" });
});
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose')


require('dotenv').config()
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true},
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )

// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to the Shoe box')
  })
  
  // INVENTORY
  const inventoryController = require('./controllers/inventory_controllers')
  app.use('/inventory', inventoryController)
  
  
  // 404 Page
  app.get('*', (req, res) => {
    res.send('404')
  })
  


//LISTEN
app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});