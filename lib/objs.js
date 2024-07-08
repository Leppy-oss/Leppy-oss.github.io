import { set } from 'lodash';

export const updateState = (currentState, setState, path, value) => {
    if (path.length < 1) setState(value);
    const newState = { ...currentState }
    set(newState, path, value);

    setState(newState);
}