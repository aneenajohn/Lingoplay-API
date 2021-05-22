const express = require("express");
const {
  getPlaylists,
  addToPlaylist,
  getPlaylistById,
  updatePlaylist,
  deletePlaylist,
  addVideoToPlaylist,
  removeVideoFromPlaylist
} = require("../controllers/playlist.controller");
const {playlistParamHandler} = require("../controllers/param.controller.js")

const playlistRouter = express.Router();

playlistRouter.route("/")
  .get(getPlaylists)
  .post(addToPlaylist);

playlistRouter.param("playlistId", playlistParamHandler);

playlistRouter
  .route("/:playlistId")
  .get(getPlaylistById)
  .post(updatePlaylist)
  .delete(deletePlaylist);

playlistRouter
  .route("/:playlistId/:videoId")
  .post(addVideoToPlaylist)
  .delete(removeVideoFromPlaylist);

module.exports ={playlistRouter};