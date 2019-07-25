import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from 'axios';


class CustomForm extends React.Component {

    handleFormSubmit = ( event, requestType, postID ) => {

      event.preventDefault();

      const name = event.target.elements.title.value;
      const body = event.target.elements.body.value;

      switch ( requestType ) {
        case 'post':

          return axios.post('https://testreact-33a3d.firebaseio.com/post.json', {
            title: title,
            body: body
          })
          .then( res => console.log( res ) );

        case 'put':

          return axios.post(`/${postID}/`, {
            name: name,
            email: email
          })
          .then( res => console.log( res ) );

      }


    }

    render() {

      return (
        <div>
          <Form data-test="Form-Component"
            onSubmit ={(event) => this.handleFormSubmit(
                  event,
                  this.props.requestType,
                  this.props.postID
                )
                }>
            <Form.Item data-test="Form-Item" label="Title">
              <Input name="title" placeholder="Put Title here" />
            </Form.Item>
            <Form.Item data-test="Form-Item" label="Body">
              <Input  name="body" placeholder="write the body here" />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      );

    }
}

export default CustomForm;
