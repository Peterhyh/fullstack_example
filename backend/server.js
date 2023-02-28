const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const contactRouter = require("./routes/contactRouter");

const hostname = "localhost";
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use("/contact", contactRouter);

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
