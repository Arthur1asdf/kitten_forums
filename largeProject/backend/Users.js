const mongoose = require("mongoose");

const userSchema = new m.Schema({

	name: { type: String, required: true},
	email: { type: String, required: true, unique: true},
	password: { type: String, required: true }
	//	TODO - implement streaks
	//streak: { type: Number, default: 0 }, 
	//lastActivity: { type: Date, default: null },
	});

	const User = mongoose.model("User",userSchema);

	module.exports = User;
