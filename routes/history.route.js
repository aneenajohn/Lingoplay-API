const express = require("express");
const historyRouter = express.Router();

const {getHistory,addToHistory,deleteHistoryItem} = require("../controllers/history.controller.js");
const {historyParamHandler} = require("../controllers/param.controller");

historyRouter.route("/")
  .get(getHistory)
  .post(addToHistory);

historyRouter.param("historyId", historyParamHandler);
historyRouter.route("/:historyId")
.delete(deleteHistoryItem);

module.exports ={historyRouter}