import React from 'react';
import axios from 'axios';

import PostItems from '../../components/posts/posts';

class PostList extends React.Component {

  state = {

    list: []

  }

  componentDidMount() {

    //axios.get('https://testreact-33a3d.firebaseio.com/item.json')
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( res =>  {

        this.setState( {

          list: res.data

        } );

      } )

  }

  render() {

    return (
      <div>
        <PostItems data={ this.state.list }/>
      </div>

    );

  }

}

export default PostList;
