const initialState = {
    blogList: [
        {
            id: '1', // You can generate a unique ID here, or use a library like uuid
            title: 'Tourism in Asia',
            author: 'John Doe',
            content: 'This is a sample blog post content.',
            date: new Date(),
        },
        {
            id: '1', // You can generate a unique ID here, or use a library like uuid
            title: 'Food culture in Europe',
            author: 'Franklin Moor',
            content: 'This is a sample blog post content.',
            date: new Date(),
        },
    ],
  };
  
const blogReducer = (state = initialState, action) => {
switch (action.type) {
    case 'ADD_BLOG':
    return {
        ...state,
        blogList: [...state.blogList, action.payload],
    };
    default:
    return state;
}
};

export default blogReducer;
