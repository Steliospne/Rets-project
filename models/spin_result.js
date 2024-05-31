const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    result: {
      type: String,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);

const Spin_result = mongoose.model("Spin-result", resultSchema);

module.exports = Spin_result;
