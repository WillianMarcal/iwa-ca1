const express = require('express')
const products = require('./data/products')
const bodyParser = require("body-parser");

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.json(product)
})

app.post('/api/products', (req, res) => {
  console.log(req.body)
  const product = {
    name: req.body.name,
    price: parseInt(req.body.price),
    description: req.body.description,
    brand: req.body.brand,
    category: req.body.category,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    image: req.body.image,
    countInStock: parseInt(req.body.countInStock),
    _id: (Math.floor(Math.random() * 1000) + 15).toString()
  }
  products.push(product)
  res.json(products)
})

// app.post('/api/products/:id', (req, res) => {  
//   const indexItem= products.indexOf(req.params.id)
//   const a= delete products[indexItem]
//   console.log(a)
//   // products= products.filter((product)=> product._id!=req.params.id)
//   res.json(products)
// })

app.listen(5000, console.log('Server running on port 5000'))
 