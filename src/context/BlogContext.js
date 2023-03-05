import blogsReducer from '../reducers/blogsReducer';
import createDataContext from './createDataContext';

const INITIAL_STATE = [
	{ title: 'Blog Post #1', id: '#1' },
	{ title: 'Blog Post #2', id: '#2' },
	{ title: 'Blog Post #3', id: '#3' },
	{ title: 'Blog Post #4', id: '#4' },
	{ title: 'Blog Post #5', id: '#5' },
	{ title: 'Blog Post #6', id: '#6' },
	{ title: 'Blog Post #7', id: '#7' },
	{ title: 'Blog Post #8', id: '#8' },
	{ title: 'Blog Post #9', id: '#9' },
	{ title: 'Blog Post #10', id: '#10' },
	{ title: 'Blog Post #11', id: '#11' },
	{ title: 'Blog Post #12', id: '#12' },
	{ title: 'Blog Post #13', id: '#13' },
];

export const { Provider: BlogProvider, Context: BlogContext } =
	createDataContext(blogsReducer, INITIAL_STATE);
