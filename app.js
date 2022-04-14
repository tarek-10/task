const express = require("express");
const connection = require("./configration/config");
const { userRouter, statusRouters } = require("./router/app.router");

const app = express();
require('dotenv').config();
const port = process.env.PORT;
connection();
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(userRouter);
app.use(statusRouters);
app.listen(port , ()=>{
    console.log(`app listening successfully at port ${port}`);
})