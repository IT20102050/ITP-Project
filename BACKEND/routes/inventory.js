const router = require("express").Router();
const alert = require('alert');
let Inventory = require("../models/inventory");
const multer = require('multer');
const path = require('path');



//image upload
const storage = multer.diskStorage ({
    destination : (req, file, cb) => {
        cb(null, 'Images');
    },

    filename : (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
    
});

const upload = multer({
    storage:storage,
    limits: {fileSize: '1000000'},
    fileFilter: (req,file,cd) =>{
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname){
            return cd(null,true)
        }
        cd ('Give proper files formate to upload')
    }
    
}).single('image')


//create
router.route("/add").post((req,res) => {

    const iteamId = Number (req.body.iteamId);
    const iteamName = req.body.iteamName;
    const price = req.body.price;
    const quantity = Number (req.body.quantity);
    const brandName = req.body.brandName;
    const image = req.file.path;

    const newstore = new Inventory({

        iteamId,
        iteamName,
        price,
        quantity,
        brandName,
        image

    })



    newstore.save().then(() =>{

        res.json("Iteam added")

    }).catch((err) =>{
        alert('Item already exists');
        console.log(err);

    })

})

router.route("/").get((req,res) =>{



    Inventory.find().then((inventory) =>{

        res.json(inventory)

    }).catch((err) =>{

        console.log(err);

    })

    })
    //update
    router.route("/update/:iteamId").put(async(req,res) => {

        let Id = req.body.iteamId;
        const {iteamName} = req.body;
        const {price} = req.body;
        const {quantity} = req.body;
        const {brandName} = req.body;

        const updateInventory ={
            iteamName,
            price,
            quantity,
            brandName

        }
    const update = await Inventory.findByIdAndUpdate(Id,updateInventory)
    .then(() =>{
     res.status(200).send({status: "Iteam updated"})

    }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data",error: err.message});
})

})
//delete
router.route("/delete/:iteamId").delete(async(req,res) => {

    let Id = req.params.iteamId;

    await Inventory.findByIdAndDelete(Id).exec().then(() =>{
        res.status(200).send({status: "Iteam delete"});
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with delete user",error: err.message});
    })
})
//view
router.route("/get/:iteamId").get(async(req,res) => {
    let Id = req.params.iteamId;

    await Inventory.findById(Id).then ((inventory)=>{
        res.status(200).send({status: "Iteam fetched",inventory})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with get user",error : err.message});
    })
})

module.exports = router;