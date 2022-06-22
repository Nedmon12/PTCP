const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorresponse");
const User = require("../models/UserTeachers");

exports.protect = async (req, res, next) => {
  // let token;

  // if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
  //   token = req.headers.authorization.split(" ")[1];
  // }
  //   console.log(token);
  // if (!token) {
  //   return next(new ErrorResponse("Nott authorized to access this route", 401));
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   const user = await User.findById(decoded.id);

  //   if (!user) {
  //     return next(new ErrorResponse("No user found with this id", 404));
  //   }

  //   req.user = user;

  //   next();
  // } catch (err) {
  //   return next(new ErrorResponse("Not authorized to access this router", 401));
  // }
  const {token} = req.cookies
  if (!token) {
    return next(new ErrorResponse("You must be authenticated to access this resource",401))
  }
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  req.user = await User.findById(decoded.id)
  next()
};