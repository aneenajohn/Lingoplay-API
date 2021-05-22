const { Playlist } = require("../models/playlist.model");
const { extend } = require("lodash");

const getPlaylists = async (req, res) => {
  try {
    const playlistsArray = await Playlist.find({}).populate("videos");
    res.json({
      success: true,
      playlists: playlistsArray,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Can't retrieve playlist from server",
      errorMessage: err.errMessage,
    });
  }
};

const addToPlaylist = async (req, res) => {
  const playlistItem = req.body;
  const playlistItemToAdd = new Playlist(playlistItem);
  try {
    const addedPlaylistItem = await playlistItemToAdd.save();
    addedPlaylistItem.__v= undefined;
    res.status(201).json({
      success: true,
      playlistItem: addedPlaylistItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

const getPlaylistById = (req, res) => {
  const playlist = req.playlist;
  try{
    res.status(200).json({
    success: true,
    playlist,
  });
  }
  catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

const updatePlaylist = async (req, res) => {
  let { playlist } = req;
  const playlistUpdate = req.body;
  playlist = extend(playlist, playlistUpdate);
  try {
    const updatedPlaylist = await playlist.save();
    res.status(201).json({
      success: true,
      playlist: updatedPlaylist,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Cant update playlist now, please try again later",
      errMessage: err.errMessage,
    });
  }
};

const deletePlaylist = async(req,res) => {
   try{
    let { playlist } = req;
    await playlist.remove();
    res.status(204).json({
      success:true,
      deletedPlaylist:playlist
    });
   }
   catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
}

const addVideoToPlaylist = async (req,res) => {
  try{
    const { playlist } = req;
    const { videoId } = req.params;
    await playlist.videos.push(videoId);
    await playlist.save();
    res.status(201).json({
      success:true,
      videoId
    })
  }
  catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
}

const removeVideoFromPlaylist = async (req, res) => {
  const {videoId} = req.params;
  const { playlist } = req;
  try {
    await playlist.videos.pull(videoId);
    await playlist.save();
    res.status(201).json({
      success: true,
      playlist
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

module.exports={getPlaylists,
                addToPlaylist,
                getPlaylistById,
                updatePlaylist,
                deletePlaylist,
                addVideoToPlaylist,
                removeVideoFromPlaylist
                };