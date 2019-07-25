import React from 'react';
import { shallow } from 'enzyme';

import CustomForm from './form';
import { findByAttr } from '../../../Utils/Utils';

const setUp = ( props = {} ) => {

  const component = shallow(<CustomForm {...props} />);
  return component;

}

describe( " Form Component ", () =>{

  let component;

  beforeEach( () => {

    component = setUp();

  } );

  it( " Should render without Errors ", () => {

    const wrapper = findByAttr(  component, 'Form-Component' )
    expect( wrapper.length ).toBe(1);

  } )

} );
