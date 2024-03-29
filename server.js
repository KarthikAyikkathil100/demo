require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;
// For parsing the express payloads
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// CORS permission..
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  next();
});



app.get("/", (req, res) => {
  res.status(200).send("Server is responding fine!!");
});

app.get("/test", (req, res) => {
  try {
    res.status(200).json({
      msg: "CI/CD is working, cool!!",
      meta: 'WFH is better, update 2',
      imp_data: `${process.env.DB_NAME}`
    });
  } catch(e) {
    res.status(500).send('Error');
  }
});


app.listen(port, () => {
  console.log("Server started on port ", port);
});
