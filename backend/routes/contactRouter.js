const express = require("express");
const contactRouter = express.Router();

contactRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.statusCode = 403;
    res.end("GET method is not supported in /contact");
  })
  .post((req, res) => {
    const resData = {
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
      info: "was sent to peterhyh@yahoo.com",
    };
    res.send(resData);
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT method not supported in /contact");
  })
  .delete((req, res) => {
    res.statusCode = 403;
    res.end("DELETE method not supported in /contact");
  });

module.exports = contactRouter;
