const express = require("express");
const app= express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet= require("helmet");
const morgan= require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const studentManagmentRoute= require('./routes/studentManagmentRoutes');
const privateRoute= require("./routes/private");
const adminRoute = require('./routes/adminRoutes')
const errorHandler= require('./middlewares/error');
const multer = require("multer");
const path = require("path");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,{useUnifiedTopology:true}).then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.use("/images", express.static(path.join(__dirname, "public/images")));


//middle ware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});




app.use("/api/studentManagmentRoutes", studentManagmentRoute);
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