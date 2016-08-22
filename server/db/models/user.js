var mongoose = require("mongoose");
var EventItem = require("./eventItems");



var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    firstName: String,
    lastName: String,
    eventItems: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "EventItem"
        }]

    },
    todos: []
});


module.exports = mongoose.model("User", userSchema);