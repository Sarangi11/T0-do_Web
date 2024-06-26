const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;
connection.once('open' , () =>{
    console.log("Mongodb Connection success!");

})

const WeekRoute = require("./routes/WeekTaskRoutes.js");
app.use("/week", WeekRoute );

const Tasknew = require("./routes/TaskRoutes.js");
app.use("/task", Tasknew );

const User = require("./routes/UserRoute.js");
app.use("/user", User );


app.listen(PORT, () =>{
    console.log(`Server is up and running on prot number: ${PORT}`)
})

