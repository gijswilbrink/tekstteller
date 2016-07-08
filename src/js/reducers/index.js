/**
 * Import framework
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * Import subreducers
 */
import characters from './characters';

/**
 * Combine all subreducers in a single root reducer
 * Redux only accepts a single reducer
 */
const rootReducer = combineReducers({characters, routing: routerReducer});

/**
 * Export
 */
export default rootReducer;