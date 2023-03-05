import { createContext, useReducer } from 'react';

const createDataContext = (reducer, initialState) => {
	const Context = createContext();

	const Provider = (props) => {
		const [state, dispatch] = useReducer(reducer, initialState);
		return (
			<Context.Provider value={{ state, dispatch }}>
				{props.children}
			</Context.Provider>
		);
	};

	return { Provider, Context };
};

export default createDataContext;
