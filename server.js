require('./models/user')
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();

connectDB()
const app = express();
app.use(express.json());
app.use("/api/user", require('./routes/user'));
app.use("/api/exercise", require('./routes/exercise'));

const port = process.env.PORT || 5000;
app.use(cors());

app.listen(port, () => console.log(`Server is runnig on port ${port}`))