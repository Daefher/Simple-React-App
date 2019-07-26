import React from 'react';
import { shallow } from 'enzyme';
import PostItems  from './posts';
import checkPropTypes from 'check-prop-types';

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

  describe( "Check props", () =>{

    const expectProps = {

      id: 1,
      title: "test title",
      body: "test body"

    };

    const propsErr = checkPropTypes(PostItems.propTypes, expectProps,'props', PostItems.name);
    expect(propsErr).toBeUndefined();

  } );

} );
