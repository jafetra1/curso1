import React from "react";
import { List, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default (props) => {
  return (
    <List
      header={<div>Inicio</div>}
      footer={<div>Final</div>}
      bordered
      dataSource={props.data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text>{item.id}</Typography.Text>
          <Typography.Text>{item.name}</Typography.Text>
          <Typography.Text>{item.dob}</Typography.Text>
          <EditOutlined
            style={{color: "blue"}}
              onClick={() => props.editName(item)}
            />
            <DeleteOutlined
              style={{color: 'red'}}
              onClick={() => props.removeName(item)}
            />
        </List.Item>
      )}
    />
  );
};
