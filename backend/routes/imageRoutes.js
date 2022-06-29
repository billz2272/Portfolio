const express = require('express');
const router = express.Router();

const { protect, admin } = require('../middleware/authMiddleware')

const {
    getImages,
    postImage,
    getImageById,
    updateImage,
    deleteImage
} = required('../controllers/imageControllers')

router.route("/")
    .post(protect, admin, postImage)
    .get(getImages)
router
    .route("/:id")
    .delete(protect, admin, deleteImage)
    .put(protect, admin, updateImage)
    .get(protect, admin, getImageById)

module.exports = router