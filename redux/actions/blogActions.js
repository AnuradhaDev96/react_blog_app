// src/redux/actions/blogActions.js
export const addBlog = (blog) => {
    return {
      type: 'ADD_BLOG',
      payload: blog,
    };
  };

  // src/redux/actions/blogActions.js
export const deleteBlog = (id) => {
    return {
      type: 'DELETE_BLOG',
      payload: id,
    };
  };
  