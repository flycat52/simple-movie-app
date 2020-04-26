import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as ReactReduxHooks from '../utils/react-redux-hooks';
import MovieCollection from '../components/MovieCollection.component';
import { mockMovieData } from './mockMovieData';
import SearchBar from '../components/SearchBar.component';
import Collection from '../components/Collection.component';

describe('MovieCollection', () => {
  let wrapper;
  let store;

  it('should render MovieCollection component successfully with data', () => {
    const mockStore = configureStore([thunk]);
    store = mockStore({
      movies: mockMovieData,
      search: [],
    });

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());
    wrapper = shallow(<MovieCollection />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SearchBar)).toBeTruthy();
    expect(wrapper.find(Collection)).toBeTruthy();
  });

  it('should render MovieCollection component successfully without data', () => {
    const mockStore = configureStore([thunk]);
    store = mockStore({
      movies: [],
      search: [],
    });

    jest
      .spyOn(ReactReduxHooks, 'useSelector')
      .mockImplementation((state) => store.getState());
    wrapper = shallow(<MovieCollection />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p')).toBeTruthy();
  });
});
