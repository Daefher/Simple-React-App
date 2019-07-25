import React from 'react';
import { shallow } from 'enzyme';

import ItemDetail from './DetailView';
import { findByAttr } from '../../../Utils/Utils';

const setUp = ( props = {} ) => {

  const component = shallow(<ItemDetail {...props} />);
  return component;

}

describe( " Detail Card Component ", () =>{

  let component;
  beforeEach( () => {

    component = setUp();

  } );

  it( " Should render without Errors ", () => {

    const wrapper = findByAttr(  component, 'Card-Component' )
    expect( wrapper.length ).toBe(1);

  } )

  // describe(" Check Proptypes ", () =>{
  //
  //     if('No warning', () => {
  //
  //       const expectedProps = {
  //
  //
  //       }
  //
  //     } )
  //
  // } )

} );
