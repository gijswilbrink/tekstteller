/**
 * Import framework
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * Import subreducers
 */
import characterCalculator from './character-calculator';

/**
 * Combine all subreducers in a single root reducer
 * Redux only accepts a single reducer
 */
const rootReducer = combineReducers({characterCalculator, routing: routerReducer});

/**
 * Export
 */
export default rootReducer;