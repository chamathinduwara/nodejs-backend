const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            require: [true, "Please add username"]
        },
        email: {
            type: String,
            require: [true, "Please add email"],
            unique: [true, "Email address already taken"]
        },
        password: {
            type: String,
            require: [true, "Please add password"]
        },
    },{
        timestamp: true,
    });

    module.exports = mongoose.model("User", userSchema);