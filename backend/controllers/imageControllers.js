const asyncHandler = require('express-async-handler');
const Img = require('../models/Img');

//@route              Get /api/image
// @desc              Get all images
// @access           Public

const getImages = asyncHandler(async (req, res) => {
    const pageSize = Number(req.query.pageSize) || 10
    const pageNumber = Number(req.query.pageNumber) || 1
    const count = await Img.countDocuments()

    const images = await Img.find()
        .limit(pageSize)
        .skip(pageSize * (page - 1))
    res.json({ images, page, pages: Math.ceil(count / pageSize) })
});

// @route           POST /api/image
// @desc            Create image entry
// @access         private / admin

const postImage = asyncHandler(async (req, res) => {
    const image = new Img({
        // alt: req.body.alt,
        alt: "Sample Alt",
        src: "/uploads/sample.jpg",
        author: req.user._id,
    })
    const createdImage = await image.save()
    res.status(201).json(createdImage)
});

//@route              Get /api/image/:id
// @desc              Get single image
// @access           private / admin

const getImageById = asyncHandler(async (req, res) => {
    const image = await Img.findById(req.params.id)
    if (image) {
        res.json(image)
    } else {
        res.status(404)
        throw new Error('Image not found')
    }
});

//@route              Put /api/image/:id
// @desc              update  image
// @access           Private / Admin

const updateImage = asyncHandler(async (req, res) => {
    const { src, alt, author } = req.body
    const image = await Img.findById(req.params.id)

    if (image) {
       image.src = src ? src : image.src
       image.alt = alt ? alt : image.alt
       image.author = author ? author : image.author
    } else {
        res.status(404)
        throw new Error('Image not found')
    }
});

//@route              delete /api/image/:id
// @desc              delete an image
// @access           Private / admin

const deleteImage = asyncHandler(async (req, res) => {
    const image = await Img.findById(req.params.id)

    if (image) {
        await image.remove()
        res.json({ message: "Image Removed"})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
    } else {
        res.status(404)
        throw new Error('Image not found')
    }
});


module.exports = { getImages, postImage, getImageById,  updateImage,  deleteImage}
