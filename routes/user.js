const router = require("express").Router();


router.post("/posttest", (req,res)=>{
    const username = req.body.username;
    res.send("The username is: " + username);
}) 

module.exports = router;