const { Video } = require("../models/video.model");
const { History } = require("../models/history.model");
const { Liked } = require("../models/liked.model");
const { Playlist } = require("../models/playlist.model");

const videoParamHandler = async (req, res, next, videoId) => {
  try {
    const video = await Video.findById(videoId);
    if (!video)
      return res.json({ sucess: false, message: "There is no video associated with the id provided" })
    req.video = video;
    next();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Couldnt retrieve the video from server",
      errorMessage: err.message
    });
  }
};

const historyParamHandler = async (req, res, next, historyId) => {
  try {
    const history = await History.findById(historyId);
    if (!history)
      return res.json({ sucess: false, message: "There is no video associated with the id provided" })
    req.history = history;
    next();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Couldnt retrieve the video from server",
      errorMessage: err.message
    });
  }
};

const likedParamHandler = async (req, res, next, likedId) => {
  try {
    const liked = await Liked.findById(likedId);
    if (!liked)
      return res.json({ sucess: false, message: "There is no video associated with the id provided" })
    req.liked = liked;
    next();
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: "Couldnt retrieve the video from server",
      errorMessage: err.message
    });
  }
};


const playlistParamHandler = async (req, res, next, playlistId) => {
  try {
    const playlistFound = await Playlist.findById(playlistId);
    if (!playlistFound) {
      return res.status(404).json({
        success: false,
        message: "Couldnt retrieve the video from server",
      });
    }
    req.playlist = playlistFound;
    next();
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Couldnt retrieve playlist data",
      errMessage: err.errMessage,
    });
  }
};

module.exports ={videoParamHandler,historyParamHandler,likedParamHandler,playlistParamHandler}