const router = require("express").Router();

const schedule = require("../modles/schedule.js");

router.route("/add").post((req, res) =>{
    const Date = req.body.Date;
    const Member_id = req.body.Member_id;
    const timeslot = req.body.timeslot;
    const Trainer_name = req.body.Trainer_name;
    const status = req.body.status;


    const newSchedule = new schedule({
    
        Date,
        Member_id,
        timeslot,
        Trainer_name,
        status
    
    });

    newSchedule.save().then(() => {
        res.json("Schedule Added")
    }).catch((err) =>{
        console.log(err);
    })




    });
    router.route("/").get((req, res) =>{
        schedule.find().then((schedules)=>{
            res.json(schedules)
        }).catch((err)=>{
            console.log(err);
            res.status(400).json("Error: " + err);
        })
    
    
});

router.route("/update/:id").put(async (req, res) => {
    const { Date,
        Member_id,
        timeslot,
        Trainer_name,
        status } = req.body;
    const scheduleid = req.params.id;

    const updateschedule = {
        Date,
        Member_id,
        timeslot,
        Trainer_name,
        status
    };

    schedule.findByIdAndUpdate(scheduleid, updateschedule)
        .then(() => {
            res.json("Appointment updated successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

router.route("/delete/:id").delete(async (req, res) => {
    const scheduleid = req.params.id;

    schedule.findByIdAndDelete(scheduleid)
        .then(() => {
            res.json("Schedule deleted successfully");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Error: " + err);
        });
});

router.route("/get/:id").get(async (req, res) => {
        let uid = req.params.id;
        const work=await schedule.findById(uid).then((user) => {
            res.status(200).send({status:"Schedule plan fetched",user})
        }).catch(err => {
            console.log(err.message);
            res.status(err.status).send({status:"Error with get schedule",error:err.message});
        })    
});

module.exports = router;