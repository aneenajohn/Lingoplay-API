const { History } = require("../models/history.model");

const getHistory = async (req, res) => {
  try {
    const historyArray = await History.find({}).populate("_id");
    const normalizedHistoryArray = historyArray.map((item) => {
      const { _id, ...doc } = item._id._doc;
      return { _id: _id, ...doc };
    });
    res.json({
      success: true,
      history: normalizedHistoryArray,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Can't retrieve history from server",
      errorMessage: err.message,
    });
  }
};

const addToHistory = async (req, res) => {
  const historyItem = req.body;
  const historyItemToAdd = new History(historyItem);
  try {
    const addedHistoryItem = await historyItemToAdd.save();
    res.status(201).json({
      success: true,
      historyItem: addedHistoryItem,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      errorMessage: err.message,
    });
  }
};

const deleteHistoryItem = async (req, res) => {
  try {
    const { history } = req;
    await history.remove();
    res.json({
      success: true,
      history,
    });
  } catch (err) {
    res.json({
      success: false,
      errorMessage: err.message,
    });
  }
};


module.exports={getHistory,addToHistory,deleteHistoryItem};
