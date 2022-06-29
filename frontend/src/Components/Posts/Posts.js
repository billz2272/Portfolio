import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner/spinner";
import { v4 as uuid } from 'uuid';
import {
  createNewBlogPost,
  getAllBlogs,
  getBlogsFetch
} from "../../redux/features/Slices/blogSlice";
import { BlogsContainer, NewBlogContainer, Wrapper } from "./styles";
import { useGetAllBlogsApiQuery } from "../../redux/features/Api/getAllBlogsApi";

const Posts = () => {
  const unique_id = uuid();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const { data, error, isLoading, isFetching, isSuccess } = useGetAllBlogsApiQuery()
  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);
  console.log("isFetching", isFetching);
  console.log("isSuccess", isSuccess);
  // useEffect(() => {
  //   dispatch(getBlogsFetch());
  // }, [dispatch]);
  const addBlogsToDataBase = async (e) => {
    const addBlogsObject = {
      id: unique_id,
      title,
      image,
      description,
      content
    };
    try {
      setloading(true);
      dispatch(createNewBlogPost(addBlogsObject));
      // setloading(false);
      // setTitle('')
      // setImage('')
      // setDescription('')
      // setContent('')
    } catch (error) {
      setloading(false);
      console.log(error);
    }
    e.preventDefault();
  };



  return (
    <Wrapper>
      {loading && <Spinner />}
      <BlogsContainer>
        <h1>BlogPosts</h1>
        {isLoading && <Spinner />}
        {isFetching && <h2>...Fetching Data</h2>}
        {error && <h2>Something went wrong</h2>}
        {isSuccess && (
          <div>
            {data?.blogs?.map(({ _id, title, image,description, content }) => {
              return (
                <div key={_id}>
              <p>{title}</p>
              <img src={image} alt={image} />
              <p>{description}</p>
              <p>{content}</p>
              <br />
            </div>
              )
            })}
          </div>
        )}
      </BlogsContainer>
      <NewBlogContainer>
        <form onSubmit={addBlogsToDataBase} className="form-group">
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
            onClick={addBlogsToDataBase}
            className="btn btn-success btn-md mybtn"
          >
            Add
          </button>
        </form>
      </NewBlogContainer>
    </Wrapper>
  );
};

export default Posts;

//  {data?.map(({ _id, title, image,description, content }) => {
//           return (
//             <div key={_id}>
//               <p>{title}</p>
//               <img src={image} alt={image} />
//               <p>{description}</p>
//               <p>{content}</p>
//               <br />
//             </div>
//           );
//         })}
// import React from "react";
// import "./Posts.css";
// // import Posts from "../Posts/Posts";

// const Posts = () => {
//   const blogPosts = [
//     {
//       title: "JAVASCRIPT",
//       body: `JavaScript is the world most popular
//       lightweight, interpreted compiled programming
//       language. It is also known as scripting
//       language for web pages. It is well-known for
//       the development of web pages, many non-browser
//       environments also use it. JavaScript can be
//       used for Client-side developments as well as
//       Server-side developments`,
//       author: "Nishant Singh ",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
//     },
//     {
//       title: "Data Structure ",
//       body: `There are many real-life examples of
//       a stack. Consider an example of plates stacked
//       over one another in the canteen. The plate
//       which is at the top is the first one to be
//       removed, i.e. the plate which has been placed
//       at the bottommost position remains in the
//       stack for the longest period of time. So, it
//       can be simply seen to follow LIFO(Last In
//       First Out)/FILO(First In Last Out) order.`,
//       author: "Suresh Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
//     },
//     {
//       title: "Algorithm",
//       body: `The word Algorithm means “a process
//       or set of rules to be followed in calculations
//       or other problem-solving operations”. Therefore
//       Algorithm refers to a set of rules/instructions
//       that step-by-step define how a work is to be
//       executed upon in order to get the expected
//       results. `,
//       author: "Monu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
//     },
//     {
//       title: "Computer Network",
//       body: `An interconnection of multiple devices,
//       also known as hosts, that are connected using
//       multiple paths for the purpose of sending/
//       receiving data media. Computer networks can
//       also include multiple devices/mediums which
//       help in the communication between two different
//       devices; these are known as Network devices
//       and include things such as routers, switches,
//       hubs, and bridges. `,
//       author: "Sonu Kr",
//       imgUrl:
//         "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
//     },
//   ];

//   return (
//     <div className="posts-container">
//       {blogPosts.map((post, index) => (
//         <Posts key={index} index={index} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Posts;
