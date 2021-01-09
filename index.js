const express = require("express");
const mongoose = require("mongoose");
const app = express();
const auth = require("./routes/auth")
const MONGO_URI= process.env.MONGO_URI
app.use(express.json());


app.use("/api/auth", auth); // redirect to auth route

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then((res)=>{
        console.log("Yay we have connected to mongodb")
        app.listen(PORT, ()=>{
            console.log(`Listening on port ${PORT}`)
        })
}).catch((err)=>{
    console.log(err)
})
