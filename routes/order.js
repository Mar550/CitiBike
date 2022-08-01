const router = require("express").Router();

const Order = require("../models/Order");

const {verifyTokenAndAut, verifyTokenAndAdmin} = require("./verifyToken");


//CREATE Order
router.post("/create", verifyToken, async (req, res) => {
    const newOrder = new Order(req,body);

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE order
router.put("/:id", verifyToken, async(req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
})

//GET Order
router/get("/find/:id", async(req, res) =>{
    try {
        const order = await Order.findById(req.params.id);
        res.status(200).json(order); 
    } catch(err) {
        res.status(500).json(err);
    }
})

///GET ALL Orders

router.get("/findall", verifyTokenAndAdmin, async(req,res) => {
    try {
        const order = await Order.find()
        res.status(200).json(order);
    } catch (err){
        res.status(500).json(err);
    }
})

//DELETE Order
router.delete("/:id", verifyTokenAndAut, async (req, res) => {
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Deleted");
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;