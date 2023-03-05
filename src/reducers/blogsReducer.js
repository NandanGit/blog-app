import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from '../actions/types';

const blogsReducer = (state, action) => {
	switch (action.type) {
		case ADD_BLOG:
			return [...state, action.payload.blogPost];

		case DELETE_BLOG:
			return state.filter((blog) => blog.id !== action.payload.blogId);
		// console.log(action);
		// console.log(
		// 	`Attempting to delete the blog with id: ${action.payload.blogId}`
		// );
		// return state;

		case EDIT_BLOG:
			// const temp = [...state];
			// const blogIndex = temp.
			// return temp;
			return state.map((blog) => {
				if (blog.id !== action.payload.blogId) {
					return blog;
				}
				return action.payload.editedBlog;
			});

		default:
			return state;
	}
};

export default blogsReducer;
