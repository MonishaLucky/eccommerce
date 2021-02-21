const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const app = express();
const path = require('path');

app.use(bodyparser.json());
app.use(cors());

mongoose.connect('mongodb+srv://monisha:monisha@cluster0.fujqh.mongodb.net/eccomerce?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log("DB connected successfully.") }
).catch(
  (err) => { console.log(err) }
);

app.use("/orders", orderRoutes);
app.use("/products", productRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
})

module.exports = app;