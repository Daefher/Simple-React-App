import React from 'react';
import { List, Icon } from 'antd';
import PropTypes from 'prop-types';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const PostItems = ( props ) => {

  return (
    <List
    data-test="List-Component"
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta

          title={<a href={ `/${item.id}` }>{ item.title }</a>}
          description={item.body}
        />
        {item.content}
      </List.Item>
    )}
  />


  )
}

PostItems.propTypes = {

  dataSource: PropTypes.arrayOf( PropTypes.shape({

    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string

  } ) )

}

export default PostItems;
