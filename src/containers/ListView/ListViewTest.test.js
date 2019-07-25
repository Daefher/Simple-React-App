import React from 'react';
import { shallow } from 'enzyme';
import PostList  from './ListView';

import { findByAttr } from '../../../Utils/Utils';

const setUp = ( props = {} ) =>{

  const component = shallow(<PostList {...props}/>)
  return component;

}

describe(" Post ItemList Component ", () => {

  let component;
  beforeEach( () => {

    component = setUp();

  } );

  it( 'Should render Without Errors ', () => {

      const wrapper = findByAttr( component, "Posts-Component" );
      expect( wrapper.length ).toBe( 1 );

  } );

} );
