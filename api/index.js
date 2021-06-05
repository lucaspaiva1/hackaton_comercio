const express = require("express");

const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json({ limit: "5000mb" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/login", async (req, res) => {
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
  const {
    name,
    password,
    document,
    city,
    address,
    number,
    district,
  } = req.body;
  return db.Supplier.create({
    name,
    password,
    document,
    city,
    address,
    number,
    district,
  })
    .then((supplier) => res.send(supplier))
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
    .then((affiliate) => res.send(affiliate))
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.get("/products", (req, res) => {
  return db.Product.findAll()
    .then((product) => res.send(product))
    .catch((err) => {
      return res.send(err);
    });
});

app.post("/products", (req, res) => {
  console.log("hers");
  const {
    name,
    description,
    quantity,
    price,
    comission,
    delivery,
    delivery_price,
    image_1,
    image_2,
    image_3,
  } = req.body;
  console.log(image_1);
  return db.Product.create({
    name,
    description,
    quantity,
    price,
    comission,
    image_1,
    image_2,
    image_3,
    delivery,
    delivery_price,
  })
    .then((product) => res.send(product))
    .catch((err) => {
      return res.status(400).send(err);
    });
});

app.listen(3000);
