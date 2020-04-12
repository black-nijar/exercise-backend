const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

connectDB()
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`Server is runnig on port ${port}`))