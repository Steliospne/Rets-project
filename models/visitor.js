const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitorSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        code: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Visitor = mongoose.model("Visitor", visitorSchema);

module.exports = Visitor;
