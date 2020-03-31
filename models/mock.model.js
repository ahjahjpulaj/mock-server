const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MockSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Mock", MockSchema);
