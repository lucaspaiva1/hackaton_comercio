const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/suppliers", (req, res) => {
  return db.Supplier.findAll()
    .then((supplier) => res.send(supplier))
    .catch((err) => {
      return res.send(err);
    });
});

app.post("/suppliers", (req, res) => {
  const { name, password, document, city } = req.body;
  return db.Supplier.create({ name, password, document, city })
    .then((contact) => res.send(contact))
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.get("/affiliates", (req, res) => {
  return db.Affiliate.findAll()
    .then((affiliate) => res.send(affiliate))
    .catch((err) => {
      return res.send(err);
    });
});

app.post("/affiliates", (req, res) => {
  const { name, password, document, city } = req.body;
  return db.Affiliate.create({ name, password, document, city })
    .then((contact) => res.send(contact))
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.listen(3000);
