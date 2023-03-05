import {
	LAUNCH_MODAL,
	UPDATE_MODAL,
	CLOSE_MODAL,
	OPEN_MODAL,
} from '../actions/types';

const uiReducer = (state, action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isOpen: true,
				},
			};

		case CLOSE_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					isOpen: false,
				},
			};

		case LAUNCH_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload.updatedModal,
					isOpen: true,
				},
			};

		case UPDATE_MODAL:
			return {
				...state,
				modal: {
					...state.modal,
					...action.payload.updatedModal,
				},
			};

		default:
			return state;
	}
};

export default uiReducer;
