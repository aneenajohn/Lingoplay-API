const { Video } = require("../models/video.model");
const { extend } = require("lodash");

const getAllVideos = async (req, res) => {
  try{
    const videos = await Video.find({});
  res.json({
    success: true,
    videos,
    });
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  };
}

const getVideoById = (req, res) => {
  try{
        res.json({
        success: true,
        video: req.video,
      });
  }
  catch (err) {   
    res.json({
      success: false,
      errorMessage: err.message,
    });
  };
}

const updateVideo = async (req, res) => {
  try{
      const updateVideo = req.body;
      let { video } = req;
      video = extend(video, updateVideo);
      const updatedVideo = await video.save();
      res.json({
        success: true,
        video: updatedVideo,
      });
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }

}

const deleteVideo = async (req, res) => {
   try{
      let { videos } = req;
      await video.remove();
      res.json({ success: true, video })
   }
   catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
}


module.exports = { getAllVideos,getVideoById,updateVideo,deleteVideo};