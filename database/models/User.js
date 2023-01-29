const { Schema, model } = require("mongoose");

let userSchema = new Schema({
	idU: { type: String },

	registrado: { type: Boolean, default: false },
})

module.exports = model('Users', userSchema);