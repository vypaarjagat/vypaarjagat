const router = require('express').Router();
const Order = require('../models/Order');
const auth = require('../middleware/auth');

// CREATE ORDER (Buyer)
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'buyer')
    return res.status(403).json({ msg: "Only buyers can order" });

  const order = new Order({
    userId: req.user.id,
    products: req.body.products,
    total: req.body.total
  });

  await order.save();
  res.json(order);
});

// GET ORDERS (Admin)
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin')
    return res.status(403).json({ msg: "Admin only" });

  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
