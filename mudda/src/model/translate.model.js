const mongoose = require("mongoose")

const translateSchema = new mongoose.Schema({
    text: {type: String},
    to: {type: String},
    out: {type: String}
},{
    timestamps: true,
    versionKey: false
})


module.exports = mongoose.model("info", translateSchema);
