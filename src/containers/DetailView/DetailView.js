import React from 'react';
import axios from 'axios';
import { Card } from 'antd';

import PropTypes from 'prop-types';


class PostDetail extends React.Component {

  state = {

    post: {}

  }

  componentDidMount() {

    const postID = this.props.match.params.postID;
    //axios.get('https://testreact-33a3d.firebaseio.com/item.json')
    axios.get(`https://jsonplaceholder.typicode.com/users/${postID}`)
      .then( res =>  {

        this.setState( {

          post: res.data

        } );

      } )

     }

  render() {
    //this.props.match.params.itemID
    return (
      <div>
        <Card data-test="Card-Component" >

          <p> { this.state.post.title } </p>

          <p> { this.state.post.body } </p>

        </Card>
      </div>

    );

  }

}

PostDetail.propTypes = {

  post: PropTypes.object

}

export default PostDetail;
