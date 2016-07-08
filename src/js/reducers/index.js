/**
 * Import framework
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * Import subreducers
 */
import vowels from './vowels';
import consonants from './consonants';
import top3s from './top3s';

/**
 * Combine all subreducers in a single root reducer
 * Redux only accepts a single reducer
 */
const rootReducer = combineReducers({vowels, consonants, top3s, routing: routerReducer});

/**
 * Export
 */
export default rootReducer;