const User = require('../models/Users')
const ErrorResponse = require("../utils/errorresponse");
const sendEmail = require("../utils/sendemail");
const crypto = require("crypto");


exports.register = async (req, res, next) => {
    const { firstname, lastname, username, email, password } = req.body;
  
    try{
      const user = await User.create({
        firstname,
        lastname,
        username,
        email,
        password,
      });
      sendToken(user, 201, res)
    }catch (error){
          next(error);
      }
    };
    exports.login = async (req, res, next) => {
        const { email, password } = req.body;
      
        // Check if email and password is provided
        if (!email || !password) {
            return next(new ErrorResponse("Please provide an email and password", 400));
        }
      
        try {
          // Check that user exists by email
          const user = await User.findOne({ email }).select("+password");
      
          if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
          }
          // Check that password match
          const isMatch = await user.matchPassword(password);
      
          if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
          }
          sendToken(user, 200, res)
        }catch(error){
          res.status(500).json({
            success: false,
            error: error.message
          });
        }
    };
    
exports.forgetpassword= async (req,res, next)=>{
  // Send Email to email provided but first check if user exists
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return next(new ErrorResponse("No email could not be sent", 404));
    }
   
       // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();
    await user.save();
     console.log(user)
       // Create reset url to email to provided email
       const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;

       // HTML Message
       const message = `
         <h1>You have requested a password reset</h1>
         <p>Please make a put request to the following link:</p>
         <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
       `;
   
       try {
         await sendEmail({
           to: user.email,
           subject: "Password Reset Request",
           text: message,
         });
   
         res.status(200).json({ success: true, data: "Email Sentt" });
       } catch (err) {
         console.log(err);
   
         user.resetPasswordToken = undefined;
         user.resetPasswordExpire = undefined;
   
         await user.save();
   
         return next(new ErrorResponse("Email could not be sent", 500));

  
       }
  }catch(error){
    next(err);
  }
};
exports.resetPassword = async (req, res, next) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resetToken)
    .digest("hex");

  try {
    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() },
    });
    console.log(user)
    if (!user) {
      return next(new ErrorResponse("Invalid Token", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    res.status(201).json({
      success: true,
      data: "Password Updated Success",
      token: user.getSignedJwtToken(),
    });
  } catch (err) {
    next(err);
  }
};
const sendToken = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  res.status(statusCode).json({ sucess: true, token });
};