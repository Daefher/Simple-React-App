import React from 'react';
import { Route } from 'react-router-dom';

import PostList from './containers/ListView/ListView';
import PostDetail from  './containers/DetailView/DetailView';



const BaseRouter = () => (

  <div>

    <Route exact path='/' component={PostList}/>
    <Route exact path='/:postID' component={PostDetail}/>


  </div>

);

export default BaseRouter;
