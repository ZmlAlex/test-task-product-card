import React from 'react';
import ProductCard from './ProductCard';

describe('When the product card is shown', () => {
  it('should display hello world!', () => {
    const wrapper = shallow(<ProductCard />);
    expect(wrapper.text()).toEqual('Hello World!');
  });
});
