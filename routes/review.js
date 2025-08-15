const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const EE = require("../utils/EE.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn} = require("../middlewear.js");

const reviewController = require("../controller/review.js");


//Review
//Post Reoute
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewController.createReview)
);


//Delete Route
router.delete(
  "/:reviewId",
  wrapAsync(reviewController.destroyReview)
);


module.exports = router;
