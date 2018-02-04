import { SAVE_COMMENT } from './types';

// Action Creator
export function saveComment(comment) {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
}