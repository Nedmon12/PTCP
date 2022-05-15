const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const privateRoute= require("./routes/private");
const adminRoute = require('./routes/adminRoutes')
const errorHandler= require('./middlewares/error');

dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true}).then(() => console.log("Database connected!"))
.catch(err => console.log(err));


//middle ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/private", privateRoute);
app.use('/admin', adminRoute)
app.use(errorHandler);

const server = app.listen(8002,()=>{
    console.log("Background server is running")
})
app.get("/",(req,res)=>{
    res.send("welcome to ptcp")
})