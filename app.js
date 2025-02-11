const express = require("express");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trainRoutes = require("./routes/trainRoutes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);
app.use("/api", trainRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
