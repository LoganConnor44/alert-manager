import { alertConstants } from '../constants';

/**
 * The alert Redux reducer that updates state and returns a new state to be painted on the DOM.
 * @param {object} state 
 * @param {object} action 
 */
export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'ALERT_SUCCESS',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'ALERT_ERROR',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state;
    }
}