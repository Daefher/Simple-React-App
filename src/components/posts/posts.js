import React from 'react';
import { List, Card } from 'antd';

const PostItems = ( props ) => {

  return (

    <List
      data-test="List-Component"
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />

  )
}

export default PostItems;
