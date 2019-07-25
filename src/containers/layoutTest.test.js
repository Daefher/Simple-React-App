import React from 'react';
import { shallow } from 'enzyme';
import CustomLayout from './layout';

import { findByAttr } from '../../Utils/Utils';

const setUp = ( props = {} ) =>{

  const component = shallow(<CustomLayout {...props}/>)
  return component;

}

describe ( 'Layout Component ', () => {

  let component;

  beforeEach( () => {

    component = setUp();

  } )

  it( 'Should render Header', () =>{

    const wrapper = findByAttr( component, "Header-Test")
    expect( wrapper.length ).toBe( 1 );

  } );

  it( 'Should render menu ', () => {

    const wrapper = findByAttr( component, 'Menu-Test' );
    expect( wrapper.length ).toBe(1);

  } );

  it( 'Should render Content ', () => {

    const wrapper = findByAttr( component, 'Content-Test' );
    expect( wrapper.length ).toBe(1);

  } );

} );
