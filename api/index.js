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

app.get("/products/:id", (req, res) => {
  return db.Product.findOne({ where: { id: req.params.id } })
    .then((product) => res.send(product))
    .catch((err) => {
      return res.send(err);
    });
});

app.post("/affiliate/:affiliate_id/products/:product_id", (req, res) => {
  return db.ProductAffiliate.create({
    productId: req.params.product_id,
    affiliateId: req.params.affiliate_id,
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
  })
    .then((productAffiliate) => res.send(productAffiliate))
    .catch((err) => {
      return res.send(err);
    });
});

app.get("/affiliate/:affiliate_id/products", (req, res) => {
  return db.Affiliate.findByPk(req.params.affiliate_id, {
    include: ["products"],
  })
    .then((affiliate) => res.send(affiliate.products))
    .catch((err) => {
      return res.send(err);
    });
});

app.get("/affiliate/:affiliate_id/products/available", async (req, res) => {
  const allProducts = await db.Product.findAll({
    include: [{ model: db.Supplier, as: "supplier" }],
  });
  return db.Affiliate.findByPk(req.params.affiliate_id, {
    include: ["products"],
  })
    .then((affiliate) => {
      const affiliateProducts = affiliate.products;
      const result = allProducts.filter((product) => {
        const alreadyTaken = affiliateProducts.find((p) => p.id === product.id);
        if (alreadyTaken) return false;
        if (!product.supplier) return false;
        return product.supplier.city === affiliate.city;
      });
      return res.send(result);
    })
    .catch((err) => {
      return res.send(err);
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
  const {
    name,
    supplierId,
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
  return db.Product.create({
    name,
    supplierId,
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
