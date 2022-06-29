import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from '../../redux/actions/blogActions';
import Spinner from "../Spinner/spinner";
// import {
//   createNewBlogPost,
//   getAllBlogs,
//   getBlogsFetch
// } from "../../redux/features/Slices/blogSlice";
import { BlogsContainer, NewBlogContainer, Wrapper } from "./styles";

const Posts = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
useEffect(() => {
  dispatch(getBlogs())
}, [dispatch]);
const blogList = useSelector(state => state.blogList);
const { loading: loadingBlogs, blogs} = blogList;
 
  return (
    <Wrapper>
      <BlogsContainer>
        {loadingBlogs || !blogs ? <Spinner /> : blogs.map((post, index) => (
          <div key={index}>
            {post.image ? (
              <>
                <div>
                  <img src={post.image} alt={post.title} />
                </div>
                <p>{post.description}</p>
              </>
           ) : <Spinner/>}
          </div>
        ))
       }
      </BlogsContainer>
      <NewBlogContainer>
        <form className="form-group">
          <label htmlFor="title">Name</label> 
          <input
            type="text"
            className="form-control"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <br />

          <label htmlFor="img">Image</label>

          <input
            type="file"
            className="form-control"
            onChange={e => setImage(e.target.value)}
            value={image}
          />
          <br />

          <label htmlFor="description">Description</label>

          <input
            type="text"
            className="form-control"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <br />

          <label htmlFor="content">Content</label>

          <input
            type="text"
            className="form-control"
            onChange={e => setContent(e.target.value)}
            value={content}
          />

          <button
            // onClick={addBlogsToDataBase}
            className="btn-posts"
          >
            Add
          </button>
        </form>
      </NewBlogContainer>
    </Wrapper>
  );
};

export default Posts;