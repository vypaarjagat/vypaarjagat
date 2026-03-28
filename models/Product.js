const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  // only logged user
});
