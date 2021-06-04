const express = require("express");
const cors = require("cors");
const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
// app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", async (req, res) => {
  console.log("here");
  try {
    const supplier = await db.Supplier.findOne({
      where: {
        document: req.body.username,
        password: req.body.password,
      },
    });

    if (supplier) return res.send({ user: supplier, user_type: "supplier" });

    const affiliate = await db.Affiliate.findOne({
      where: {
        document: req.body.username,
        password: req.body.password,
      },
    });
    if (affiliate) return res.send({ user: affiliate, user_type: "affiliate" });
    return res.status(401).send({ message: "Credenciais inválidas" });
  } catch (errs) {
    return res.send(err);
  }
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
