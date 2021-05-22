const express = require("express");
const videoRouter = express.Router();
const {getAllVideos,getVideoById,updateVideo,deleteVideo} = require ("../controllers/video.controller.js");
const {videoParamHandler} = require("../controllers/param.controller.js");

videoRouter.route("/").get(getAllVideos);

videoRouter.param("videoId", videoParamHandler);


videoRouter.route("/:videoId")
.get(getVideoById)
.post(updateVideo)
.delete(deleteVideo);


module.exports = {videoRouter}