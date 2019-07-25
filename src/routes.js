import React from 'react';
import { Route } from 'react-router-dom';

import ItemList from './containers/ListView/ListView';


const BaseRouter = () => (

  <div>

    <Route exact path='/' component={ItemList}/>

  </div>

);

export default BaseRouter;
