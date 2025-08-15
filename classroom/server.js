const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(session({ secret: "mysupersecretstring"}));

app.get("/reqcount",(req,res) =>{
  res.send(`You snet a requst x times`);
})
app.get("/test",(req,res) =>{
  res.send("test successful")
})
app.listen(3000, () => {
  console.log("server i slisteing to port 3000");
});
