import { handleActions } from 'redux-actions';
import { SAVE_COMMENT } from '../actions/types';

export default handleActions({
    [SAVE_COMMENT]: (state, { payload }) => [...state, payload]
}, []);