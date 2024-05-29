const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const categoryRouter = require("./routes/categoryRouter");

app.use(express.json());
dotenv.config({ path: "./.env" });

// ENDPOINT REQUEST LOGGER
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// DB PASSWORD ENCODED BECAUSE IT INCLUDES SPECIAL CHARACTERS
const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);
const DB = process.env.DB_CONNECTION.replace("<PASSWORD>", encodedPassword);

// DB CONNECTION
mongoose.connect(DB).then(() => {
  //   console.log(con.name);
  console.log("Connection established");
  app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
  });
});

// ROUTES
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/categories", categoryRouter);
