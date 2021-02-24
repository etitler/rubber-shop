const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    title: 'Band CD',
    price: 10.99,
    description: 'Physical CD'
  },
  {
    id: 2,
    title: 'Band Stickers',
    price: 4.99,
    description: 'Variety pack of Band stickers'
  },
  {
    id: 3,
    title: 'Band Tee-shirt',
    price: 14.99,
    description: 'Band Tee-shirt'
  },
]

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(products));
});

module.exports = router;
