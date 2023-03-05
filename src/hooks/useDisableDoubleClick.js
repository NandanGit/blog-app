import { useState } from 'react';

const useDisableDoubleClick = (defaultDelay = 1000) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const delayWrapper = (fn, delay = defaultDelay) => {
		return (...args) => {
			setIsDisabled(true);
			fn(...args);
			setTimeout(() => setIsDisabled(false), delay);
		};
	};

	return { isDisabled, delayWrapper };
};

export default useDisableDoubleClick;
