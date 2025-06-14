const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

// midleware
app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
  res.send("hello server site");
});

app.listen(port, () => {
  console.log(`server is connected on port: ${port}`);
});
