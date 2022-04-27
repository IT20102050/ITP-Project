const router = require("express").Router();
const alert = require('alert');
let Inventory = require("../models/inventory");



//create
router.route("/add").post(async(req,res) => {

    
    const iteamName = req.body.iteamName;
    const price = req.body.price;
    const quantity = Number (req.body.quantity);
    const brandName = req.body.brandName;

    const newstore = new Inventory({

    
        iteamName,
        price,
        quantity,
        brandName,

    })

const totalNumberOfEmpInDb = await Inventory.countDocuments()
// convert number to string, so we can concatenate 0s easily...
let numberToString = totalNumberOfEmpInDb.toString()

// If length of number string is less than 5 then add leading 0s in nuberToString
if(numberToString.length < 5){
    for (let i = numberToString.length; i < 5; i++){
        numberToString = '0' + numberToString
    }
}
newstore.iteamId = `ID${numberToString}`



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