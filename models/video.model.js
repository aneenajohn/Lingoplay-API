const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema(
  {
    title:{
      type: String,
      required: "Video title is required"
    },
    language:{
      type:String,
      required:"Language is required"
    },
    videoEmbedUrl:{
      type: String,
      required: "Video URL is required"
    },
    duration:{
      type: String,
      required: "Video duration is required"
    },
    channelName:{
      type: String,
      required: "Channel name is required"
    },
    channelDp:{
      type: String,
      required: "Channel name is required"
    },
    imageUrl:{
      type: String,
      required: "Thumbnail image is required"
    },
    hoverImageUrl:{
      type: String,
      required: "Thumbnail hover image is required"
    },
    description:{
      type: String,
      required: "Video description image is required"
    },
    views:{
      type:String,
      required:"Video's number of views is required"
    },
    postedOn:{
      type: String,
      required: "Video posted date info is required"
    },
  },
  {
      timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = { Video };