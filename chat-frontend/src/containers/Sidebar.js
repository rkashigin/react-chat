import React from "react";
import { connect } from "react-redux";
import { userApi, dialogsApi } from "utils/api";

import { Sidebar as BaseSidebar } from "components";

const Sidebar = ({ user }) => {
  const [visible, setVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [messageText, setMessageText] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(null);

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  const onSelectUser = (userId) => {
    setSelectedUserId(userId);
  };

  const onAddDialog = () => {
    setIsLoading(true);

    const newDialogData = {
      text: messageText,
      partner: selectedUserId,
    };
    dialogsApi
      .create(newDialogData)
      .then(onClose)
      .catch(() => setIsLoading(false));
  };

  const onChangeTextArea = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <BaseSidebar
      user={user}
      inputValue={inputValue}
      visible={visible}
      onClose={onClose}
      onShow={onShow}
      onInputChange={handleInputChange}
      onSearch={onSearch}
      onSelectUser={onSelectUser}
      onModalOk={onAddDialog}
      users={users}
      isLoading={isLoading}
      messageText={messageText}
      onChangeTextArea={onChangeTextArea}
      selectedUserId={selectedUserId}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(Sidebar);
