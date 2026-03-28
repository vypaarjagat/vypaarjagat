const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('YOUR_MONGO_URL')
.then(()=>console.log("DB Connected"));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/product'));

app.listen(5000, () => console.log("Server running"));
