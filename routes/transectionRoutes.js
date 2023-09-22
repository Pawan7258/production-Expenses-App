const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

// Router object
const router = express.Router();

// Routes
// add transection  POST   method

router.post("/add-transection", addTransection);

// Edit transection  POST   method

router.post("/edit-transection", editTransection);

// Delete transection  POST   method

router.post("/delete-transection", deleteTransection);

// post Transaction
router.post("/get-transection", getAllTransection);

module.exports = router;
