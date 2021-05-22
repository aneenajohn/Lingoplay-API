const mongoose = require("mongoose");
const { Schema } = mongoose;

const likedSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId, 
    ref: "Video"
    },
});


const Liked = mongoose.model("Liked", likedSchema);

module.exports = { Liked };