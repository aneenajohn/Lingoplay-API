const { Liked } = require("../models/liked.model");

const getAllLiked = async (req, res) => {
  try {
    const likedArray = await Liked.find({}).populate("_id");
    const normalizedlikedArray = likedArray.map((item) => {
      const { _id, ...doc } = item._id._doc;
      return { _id: _id, ...doc };
    });
    res.json({
      success: true,
      liked: normalizedlikedArray,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Can't retrieve liked videos from server",
      errorMessage: err.message,
    });
  }
};

const addToLiked = async (req, res) => {
  const likedItem = req.body;
  const likedItemToAdd = new Liked(likedItem);
  try {
    const addedLikedItem = await likedItemToAdd.save();
    res.status(201).json({
      success: true,
      likedItem: addedLikedItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

const deleteLikedItem = async (req, res) => {
  try {
    const { liked } = req;
    await liked.remove();
    res.json({
      success: true,
      liked,
    });
  } catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
};


module.exports={getAllLiked,addToLiked,deleteLikedItem};
