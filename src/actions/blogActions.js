import { ADD_BLOG, DELETE_BLOG, EDIT_BLOG } from './types';

const blogActions = {};

blogActions.addBlog = (blogPost) => {
	return { type: ADD_BLOG, payload: { blogPost } };
};

blogActions.deleteBlog = (blogId) => {
	return { type: DELETE_BLOG, payload: { blogId } };
};

blogActions.editBlog = (blogId, editedBlog) => {
	return { type: EDIT_BLOG, payload: { blogId, editedBlog } };
};

export default blogActions;
