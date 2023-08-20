import React, { useState } from 'react';
import BlogModel from '../models/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateBlog = () => {

  // state variable to maintain blog input
  const [blog, setBlog] = useState(BlogModel);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Blog:', blog);
  };

  return (
    <div className="container mt-5">
      <h2>Create a New Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={blog.author}
            onChange={(e) => setBlog({ ...blog, author: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            rows="4"
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
