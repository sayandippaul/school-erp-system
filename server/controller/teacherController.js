const attendanaceModel = require("../models/attendance");
const { catchAsync } = require('../utlis/catchAsync');

const postHandler = catchAsync(async (req,res,next) => {
        let {teacherName,studentId,subject,noOfPeriods} = req.body;
        if(!teacherName || !studentId || !subject || !noOfPeriods){
            return res.json({error: "Fields must not be empty"});
        }
            const newAttendance = new attendanaceModel({teacherName,studentId,subject,noOfPeriods});
            const savedAttendance = await newAttendance.save();
            res.status(200).json({savedAttendance});
        });

module.exports = {postHandler};