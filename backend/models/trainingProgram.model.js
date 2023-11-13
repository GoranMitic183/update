const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const trainingProgram = new Schema(
  {
    image: { type: String, require: true },
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    program: { type: String, require: true },
  },
  { collection: "trainingProgram" }
);

const Program = mongoose.model("trainingProgram", trainingProgram);

module.exports = Program;
