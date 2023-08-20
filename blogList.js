// src/components/BlogList.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogList = () => {
  const blogList = useSelector(state => state.blog.blogList); // Get blogList from Redux store

  const handleDelete = (id) => {
    dispatch(deleteBlog(id));
  };

  return (
    <div className="container mt-5">
      <h2>Blog List</h2>
      <ul>
        {blogList.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
            <p>Date: {blog.date.toDateString()}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(blog.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
