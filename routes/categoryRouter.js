const express = require("express");
const router = express.Router();
const {
  getCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory,
  getSubcategory,
} = require("./../controllers/categoryController");

router.route("/:id/subcategories").get(getSubcategory);

router.route("/").get(getCategories).post(createCategory);

router
  .route("/:id")
  .get(getCategory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
