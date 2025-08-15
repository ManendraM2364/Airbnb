const express = require("express");
const router = express.Router();

router.get("/",(req,res) =>{
  res.send("Get for user");  
})

router.get("/:id", (req, res) => {
res.send("Get for user id");  
});

router.post("/", (req, res) => {
    res.send("post for user");  
});


router.delete("/:id", (req, res) => {
    res.send("Delete for user id");  
});

module.exports = router;
