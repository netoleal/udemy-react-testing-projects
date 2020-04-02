import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders without error ', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });

  describe('word has been guessed', () => {
    test('renders without error ', () => {});
    test('renders not input box', () => {});
    test('renders not submit button', () => {});
  });
});

describe('update state', () => {});
