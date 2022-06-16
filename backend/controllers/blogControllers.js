const asyncHandler = require('asyncHandler');

const Blog = require('../models/Blog');

const getAllBlogs = asyncHandler(async (req, res) => {
    const pageSize = Number(req.query.pageSize) || 10
    const pageNumber = Number(req.query.pageNumber) || 1

    const count = await Blog.countDocuments()

    const blogs = await Blog.find().limit(pageSize).skip(pageSize * (pageNumber - 1))

    res.json({ blogs, pageNumber, pages: Math.ceil(count / pageSize)})
})

const getBlogById = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if(blog) {
        res.json(blog)
    } else {
        res.status(404)
        throw new Error('Blog not found')
    }
})

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
    if(blog){
        await blog.remove()
        res.json({ message: "Blog removed"})
    } else {
        res.status(404)
        throw new Error("Blog not Found")
    }
})

const createBlog = asyncHandler(async (req, res) => {
    const blog = new Blog({
        title: 'Sample title',
        image: 'Sample Image',
        content: 'Sample Content',
        description: 'Sample Description',
    })
    const createdBlog = await blog.save()
    res.status(201).json(createdBlog)
})

const updateBlog = asyncHandler(async (req, res) => {
    const { title, image, description, content } = req.body
    const blog = await Blog.findById(req.params.id)

    if(blog){
        blog.title = title
        blog.image = image
        blog.description = description
        blog.content = content
    }

    const updatedBlog = await blog.save()

res.status(201).json(updatedBlog)
})

module.exports = {
    getAllBlogs,
    createBlog,
    updateBlog,
    getBlogById,
    deleteBlog,
 }