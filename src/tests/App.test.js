import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from '../App';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const store = mockStore({
  movies: null,
  search: null,
});

describe('AppComponent', () => {
  it('should render correctly', () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
