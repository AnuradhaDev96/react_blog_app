import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import blogActions from '../redux/actions/blogActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const UpdateBlog = ({ match, history }) => {
  const blogId = match.params.id;

  const dispatch = useDispatch();

  const blogList = useSelector(state => state.blog.blogList);

  const [blog, handleBlogUpdates] = useState({});

  useEffect(() => {
    // check whether there is a blog object by params id exist
    const selectedBlog = blogList.find(blog => blog.id === blogId);

    // if exists load selected blog into local state variable using state update function
    if (selectedBlog) {
      handleBlogUpdates(selectedBlog);
    }
  }, [blogList, blogId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(blogActions.updateBlog(blog)); // Dispatch the updateBlog action

    history.push('/blogList'); // Redirect back to the blog list after updating
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleBlogUpdates(prevBlog => ({ ...prevBlog, [name]: value }));
  };

  return (
    <div className="container mt-5">
      <h2>Update Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={blog.title || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={blog.author || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={blog.content || ''}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
