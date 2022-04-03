const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB Connection succesfull!")).catch((err) => {console.log(err)});

app.use(cors());
//app.use(cors({origin: "http://blaacksheeps.com", optionsSuccessStatus: 200}));
//creating a REST API and endpoints (ie. route in react)
app.use(express.json());
app.use("/api/auth", authRoute); 
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 8000, () => {
    console.log("Backend Server is running");
});

