import { CLOSE_MODAL, LAUNCH_MODAL, OPEN_MODAL, UPDATE_MODAL } from './types';

const uiActions = {};

uiActions.modal = {};

uiActions.modal.open = () => {
	return {
		type: OPEN_MODAL,
	};
};

uiActions.modal.close = () => {
	return {
		type: CLOSE_MODAL,
	};
};

uiActions.modal.update = (updatedModal) => {
	return {
		type: UPDATE_MODAL,
		payload: {
			updatedModal,
		},
	};
};

uiActions.modal.launch = (updatedModal) => {
	return {
		type: LAUNCH_MODAL,
		payload: {
			updatedModal,
		},
	};
};

export default uiActions;
