const router = require('express').Router();

// Temporary dummy data
router.get('/', async (req, res) => {
  res.json([
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 200 }
  ]);
});

router.post('/', async (req, res) => {
  res.json({ message: "Product added (dummy)" });
});

module.exports = router;
