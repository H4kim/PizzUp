const express = require("express");
const app = express();
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const errorsHandler = require("errors-handler");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());
app.use(morgan("tiny"));

//ROUTES
app.use(express.static(__dirname + "/public"));
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
// app.use("/api/cart", cartRoutes);

app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "fail",
    message: "Humm ! No route defined",
  });
});

//Gloabl error handler
app.use(errorsHandler);

module.exports = app;
