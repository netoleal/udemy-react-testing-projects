import { createStore, applyMiddleware } from 'redux';
import { checkPropTypes } from 'prop-types';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/configureStore';

/**
 * @param  {} initialState
 */
export function storeFactory(initialState) {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
}

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

/**
 * @param  {} component
 * @param  {} conformingProps
 */
export function checkProps(component, conformingProps) {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
}
