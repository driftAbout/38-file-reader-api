'use strict';

import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CategoryForm} from '../components/category';
const debug  = require('debug')('http:category-form-test');

configure({adapter: new Adapter()});

describe('Category form tests', function (){

  describe('CategoryForm shallow mount', () => {

    beforeAll(() => this.component = shallow(<CategoryForm />));
    afterAll(() => this.component.unmount());

    it('should render a CategoryForm component', () => {
      expect(this.component.length).toEqual(1);
      expect(this.component.find('.category-form').length).toEqual(1);
    });

    it('should have default state for amount and name', () => {
      expect(this.component.state().amount).toEqual(0);
      expect(this.component.state().name).toEqual('');
    });

    it('should add a name value to state on change', () => {
      this.component.find('.category-form input[name="name"]').simulate('change', {target: {name: 'name', value: 'Kevin'}});
      this.component.find('.category-form input[name="amount"]').simulate('change', {target: {name: 'amount', value: 1000000}});
      expect(this.component.state().name).toEqual('Kevin');
      expect(this.component.state().amount).toEqual(1000000);
    });

  });

  describe('CategoryForm mount', () => {

    beforeAll(() => {
      this.component = mount(<CategoryForm category={{name: 'pickled pigs knuckles', amount: 100}}/>);
      this.component.setProps({
        onComplete:  jest.fn(),
        submit_text: 'Aardvark',
      });
    });
    afterAll(() => this.component.unmount());

    it('Should populate the input fields from props', () => {
      debug('name input', this.component.find('.category-form input[name="name"]').prop('value'));
      expect(this.component.find('.category-form input[name="name"]').prop('value')).toEqual('pickled pigs knuckles');
      expect(this.component.find('.category-form input[name="amount"]').prop('value')).toEqual(100);
    });

    it('Should add text to the submit button', () => {
      expect(this.component.find('.category-form button').text()).toEqual('Aardvark');
    });

    it('should reset the state when the form is submitted', () => {
      this.component.find('.category-form').simulate('submit', {preventDefault: ()=>{}});
      expect(this.component.state().name).toEqual('');
      expect(this.component.state().amount).toEqual(0);
    });

    it('should have invoked the onComplete function', () => {
      expect(this.component.props().onComplete).toHaveBeenCalled();
    });

  });
});