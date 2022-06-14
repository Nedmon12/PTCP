const School = require('../models/schools')
exports.addSchool = async (req, res, next) => {

  const { schoolname, schooladresscity, subcity, zip, firstname,lastname, email,password, contact } = req.body;
    try {
      const school = await new School(req.body).save();
      console.log(school);
      // Returning successfull response
      res.status(200).json({
        success: true,
        school,
        message: "Successfully Created the document in Model ",
      });
    } catch (error) {
      // If err is thrown by Mongoose due to required validations
      next(error);
    }
  };
  