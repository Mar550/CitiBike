const User = require("../models/User");
const {verifyToken, verifyTokenAndAut, verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();
const CryptoJS = require("crypto-js");


// UPDATE route

router.put("/:id", verifyTokenAndAut, async (req, res) => {
    const checkedid = req.params.id;

    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET_KEY
      ).toString();
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        checkedid.trim(),
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


// FIND User route
router.get("/find/:id", verifyTokenAndAdmin, async (req,res)=>{
  const checkedid = req.params.id;
  try{
    const user = await User.findById(checkedid.trim())
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch(err){
    res.status(500).json(err);
  }
})

//FIND All Users route
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try{
    const users = query
    ? await User.find().limit(5)
    : await User.find();
    res.status(200).json(users);
  } catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;

