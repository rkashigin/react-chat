import React from "react";
import { FormOutlined, TeamOutlined } from "@ant-design/icons";
import { Button, Modal, Select, Input, Form } from "antd";
import { Dialogs } from "containers";

import "./Sidebar.scss";

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
  user,
  visible,
  inputValue,
  onClose,
  onShow,
  onInputChange,
  onSearch,
  onSelectUser,
  users,
  isLoading,
  onModalOk,
  onChangeTextArea,
  messageText,
  selectedUserId,
}) => {
  const options = users.map((user) => (
    <Option key={user._id}>{user.fullName}</Option>
  ));

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <TeamOutlined />
          <span className="">All dialogs</span>
        </div>
        <Button onClick={onShow} shape="circle" icon={<FormOutlined />} />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>

      <Modal
        title="Create new dialog"
        visible={visible}
        footer={[
          <Button key="back" onClick={onClose}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}
            disabled={!messageText}
          >
            Create Dialog
          </Button>,
        ]}
      >
        <Form layout="vertical" className="add-dialog-form">
          <Form.Item label="Enter user full name or his email:">
            <Select
              style={{ width: "100%" }}
              value={inputValue}
              onSearch={onSearch}
              onChange={onInputChange}
              onSelect={onSelectUser}
              notFoundContent={null}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              showSearch
            >
              {options}
            </Select>
          </Form.Item>
          {selectedUserId && (
            <Form.Item label="Enter your message:">
              <TextArea
                value={messageText}
                onChange={onChangeTextArea}
                autosize={{ minRows: 3, maxRows: 10 }}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
