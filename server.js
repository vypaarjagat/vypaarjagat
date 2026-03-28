const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connected"));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));

app.get("/", (req, res) => {
  res.send("VypaarJagat Advanced 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
