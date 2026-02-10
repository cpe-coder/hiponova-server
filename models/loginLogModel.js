const { Schema, model } = require("mongoose");

const loginLogSchema = new Schema(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		email: { type: String, required: true },
		loginTime: { type: Date, required: true },
		logoutTime: { type: Date },
		status: {
			type: String,
			enum: ["ACTIVE", "LOGOUT"],
			default: "ACTIVE",
		},
	},
	{ timestamps: true },
);

module.exports = model("LoginLog", loginLogSchema);
