import React from 'react';
import { shallow } from 'enzyme';
import PostItems  from './posts';

import { findByAttr } from '../../../Utils/Utils';

const setUp = ( props = {} ) =>{

  const component = shallow(<PostItems {...props}/>)
  return component;

}

describe(" Post Component ", () => {

  let component;
  beforeEach( () => {

    component = setUp();

  } );

  it( 'Should render Without Errors ', () => {

      const wrapper = findByAttr( component, "List-Component" );
      expect( wrapper.length ).toBe( 1 );

  } );
  
} );
