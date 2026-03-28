const router = require('express').Router();
const Product = require('../models/Product');
const auth = require('../middleware/auth');

// CREATE PRODUCT (Seller only)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'seller')
    return res.status(403).json({ msg: "Only seller allowed" });

  const product = new Product({
    name: req.body.name,
    price: req.body.price
  });

  await product.save();
  res.json(product);
});

// GET PRODUCTS
router.get('/', async (req, res) => {
  const data = await Product.find();
  res.json(data);
});

module.exports = router;
