const router = require('express').Router()
const Schools = require('../models/schools')
const adminController = require('../controllers/adminController')

//router.get('/', adminController.getSchools)
//honestly idk what to do with /admin yet

router.get('/schools', adminController.getSchools)

// router.get('/schools/:schoolId', async (req,res) => {
//     //a single instance of school
//     //todo allow modifications on the front end
//     try {
//         const school = await Schools.findById(req.params.schoolId)
//         if (school.schoolId == req.params.schoolId) {
//             await Schools.updateOne({set: req.body})
//             res.status(200).json("School information succesfully updated")
//         }
//         else {
//             res.status(403).json("Not authorized for this operation")
//         }
//     } catch (error) {
//         res.status(500).json("Unable to serve")
//     }

// })
// router.get(
//     '/group/group-by-month',
//     async (req, res) => {
//       try {
//         const users = await Schools.aggregate([
//           {
//             $group: {
//               // _id: '$_id',
//               _id: { month: { $month: '$date' } },
//               count: { $sum: 1 }
//             }
//           }
//         ]);
  
//         const response = users.map((user) => ({
//           month: ConvertIntToMonth(user._id.month),
//           count: user.count
//         }));
  
//         return res.json(response);
//         // console.log(user);
//       } catch (err) {
//         return res.status(400).json({ error_msg: err });
//       }
//     }
//   );

router.post('/schools', adminController.addSchool)
router.patch('/schools/editschool', adminController.patchSchool)

router.post('/', adminController.addAdmin)
router.get('/:userId', adminController.getAdmin)



module.exports = router