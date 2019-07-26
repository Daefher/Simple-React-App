import React from 'react';
import axios from 'axios';
import { Card, Button } from 'antd';

import PropTypes from 'prop-types';

import CustomForm from '../../components/Form/form';


class PostDetail extends React.Component {

  state = {

    post: {}

  }

  componentDidMount() {

    const postID = this.props.match.params.postID;
    //axios.get('https://testreact-33a3d.firebaseio.com/post.json')
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/`)
      .then( res =>  {

        this.setState( {

          post: res.data

        } );

      } )

     }

  handleDelete = ( event ) => {

    const postID = this.props.match.params.postID;
    //axios.get('https://testreact-33a3d.firebaseio.com/post.json')
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postID}/`)
    this.props.history.push('/');
    this.forceUpdate();

  }




  render() {
    //this.props.match.params.itemID
    return (
      <div>
        <Card data-test="Card-Component" >

          <p> { this.state.post.title } </p>

          <p> { this.state.post.body } </p>

        </Card>

        <h2> Edit Post </h2>

        <CustomForm data-test="CustomFormComponent"
          requestType="put"
          postID={this.state.post.id}
        />
        <form onSubmit={this.handleDelete}>
          <Button htmlType="submit" type="danger">Delete</Button>
        </form>

      </div>

    );

  }

}

PostDetail.propTypes = {

  post: PropTypes.object

}

export default PostDetail;
