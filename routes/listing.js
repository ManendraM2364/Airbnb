const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const EE = require("../utils/EE.js");
const { listingSchema, reviewSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middlewear.js");
const listingController = require("../controller/listing.js");
const multer = require('multer');
const upload = multer({dest:'uploads/'});


const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new EE(400, errMsg);
  } else {
    next();
  }
};

router
  .route("/")
  .get( wrapAsync(listingController.index))
  // .post(
  //   isLoggedIn,
  //   validateListing,
  //   wrapAsync(listingController.createListing)
  // );
.post( upload.single('listing[image]'),(req,res) =>{
  res.send(req.file);
});

router.get("/new", isLoggedIn, listingController.renderNewForm);


router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, listingController.destroyLisitng);


router.get("/:id/edit", isLoggedIn, listingController.renderEditForm);

module.exports = router;
