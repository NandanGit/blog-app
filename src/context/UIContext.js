import uiReducer from '../reducers/uiReducer';
import createDataContext from './createDataContext';

const INITIAL_STATE = {
	modal: {
		isOpen: false,
		title: 'Title',
		message: 'Message',
		acceptText: 'Yes',
		rejectText: 'No',
		acceptAction: () => {
			console.log('Accept action requested on the modal');
		},
		rejectAction: () => {
			console.log('Reject action requested on the modal');
		},
	},
};

export const { Provider: UIProvider, Context: UIContext } = createDataContext(
	uiReducer,
	INITIAL_STATE
);
