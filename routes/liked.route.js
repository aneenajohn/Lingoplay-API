const express = require("express");
const likedRouter = express.Router();

const {getAllLiked,addToLiked,deleteLikedItem} = require("../controllers/liked.controller.js");
const {likedParamHandler} = require("../controllers/param.controller");

likedRouter.route("/")
.get(getAllLiked)
.post(addToLiked)

likedRouter.param("likedId", likedParamHandler);
likedRouter.route("/:likedId")
.delete(deleteLikedItem);

module.exports ={likedRouter}