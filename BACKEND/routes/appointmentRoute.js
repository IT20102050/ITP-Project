const router = require ("express").Router();
let Appointment = require("../models/AppointmentModel");

/*router.route("/add").post((req,res)=>{

    const date = req.body.date;
    const time = req.body.time;
    const name = req.body.name;
    const age = req.body.age;
    const tpNo = req.body.tpNo;
    const email = req.body.email;
    const reason = req.body.reason;

    const newAppointment = new Appointment({
        date,
        time,
        name,
        age,
        tpNo,
        email,
        reason
    })

        newAppointment.save().then(() =>{
            res.json("Appointment added successfully")
        }).catch ((err) =>{
            console.log(err);
        })
})*/

router.post('/add',  (req,res)=>{

    const newAppointment = new Appointment({

        date: req.body.date,
       
        name: req.body.name,
        age: req.body.age,
        tpNo: req.body.tpNo,
        email:req.body.email,
        reason:req.body.reason
        
    })

    newAppointment.save().then(()=> {
        console.log('Appointment added successfully');
        res.redirect('http://localhost:3000/view');

    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view").get((req,res)=>{

   Appointment.find().then((appointments)=>{
       res.json(appointments)
   }).catch((err)=>{
    console.log(err)
   })
})

/*router.route("/update/:ID").put (async(req,res) => {
    let appointmentId = req.params.ID;
    const {date, time, name, age, tpNo, email,reason} =req.body;

    const upadateAppointment ={
        date,
        time,
        name,
        age,
        tpNo,
        email,
        reason
    }

    const update = await Appointment.findByIdAndUpdate(appointmentId, update).then(()=>{
        res.status(200).send({status: "Appointment updated",update:update})
        }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating appointment", error: err.message});
        })
})*/

router.route("/update/:ID").put(async(req,res)=>{
    let appointmentId = req.body.ID;
    const {date} = req.body;
    
    const {name} = req.body;
    const {age} = req.body;
    const {tpNo} = req.body;
    const {email} = req.body;
    const {reason} = req.body;


    const Update = {
        date,
       
        name,
        age,
        tpNo,
        email,
        reason
    }

    const update = await Appointment.findByIdAndUpdate(appointmentId, Update).then(()=>{
        res.status(200).send({status: "Appointment updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating appointment", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    var appointmentId = req.params.id;
    await Appointment.findByIdAndRemove(appointmentId).exec().then(()=>{
    res.status(200).send({status: "Appointment deleted"})
    }).catch((err)=>{
    res.status(500).send({status: "Error with deleting Appointment", error: err.message});
    })
    })

    router.route("/get/:id").get(async(req,res) =>{
        let appointmentId = req.params.id;
        const appointment = await Appointment.findById(appointmentId).then(()=>{
            res.status(200).send({status:"Appointment Fetched",appointment:appointment})
        }).catch((err)=>{
            res.status(500).send({status: "Error with retrieving Appointment",error: err.message});
        })
    })

module.exports = router;