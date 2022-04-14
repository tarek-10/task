const statusSchema = require("../schema/status.schema");
const mongoose = require("mongoose");

const statusModel = mongoose.model("status",statusSchema);

module.exports = statusModel;