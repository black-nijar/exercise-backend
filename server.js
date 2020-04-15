const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(express.json({ extended: false }))
app.use(cors());

app.use("/api/users", require("./routes/user"));
app.use("/api/exercises", require("./routes/exercise"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is runnig on port ${port}`));
