// BlogListItem.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogListItem = ({ blog }) => {
  const history = useHistory();

  const handleUpdateClick = () => {
    history.push(`/updateBlog/${blog.id}`);
  };

  return (
    <li key={blog.id}>
      <h3>{blog.title}</h3>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
      <button
        className="btn btn-primary"
        onClick={handleUpdateClick}>
        Update
      </button>
    </li>
  );
};

export default BlogListItem;
