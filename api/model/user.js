var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var username = {
	username:String,
	password:String
}

var username = mongoose.model("username",new Schema(username));

module.exports = username;