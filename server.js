const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const passport = require("passport");
const users = require("./routes/api/users");
const socketio=require('socket.io')
const chats=require('./routes/api/chats')
const cors=require('cors')
const http=require('https')
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(cors())
const server=http.createServer(app)
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,
    useUnifiedTopology:true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err)); 

  app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);


//Chat and socket component
const io=socketio(server)
io.on('connection',(socket)=>{
    console.log('We have a new connection!!!')

    socket.on('join',({name,room},callback)=>{
      console.log(name,room)
      const error=true
      if(error){
        callback({error:'error'})
      }
    
    })

    socket.on('disconnect',()=>{
      console.log("User has left!!!")
    })
})


app.use("/dashboard/chatRoom",chats)
const port = process.env.PORT || 9000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));