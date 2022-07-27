const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();

mongoose.connect("mongodb+srv://Citibike:Qwerty.12345@cluster0.a2fd9.mongodb.net/?retryWrites=true&w=majority")
        .then(() => console.log("Connected to DB !"))
        .catch((err) => {
            console.log(err);
        });


app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running")
})

