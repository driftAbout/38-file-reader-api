import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Dashboard} from '../components/dashboard';
import store from '../lib/store';

Enzyme.configure({adapter: new Adapter()});

describe('Dashboard: Test initial State', () => {
  it('Should have an initial state with an empty notes array', () => {
    let dashboard = Enzyme.shallow(<Dashboard store={store} match={{path: '/dashboard'}}/>, { router: {isActive: () => true } });
    expect(dashboard.state()).toEqual({});
  });
});