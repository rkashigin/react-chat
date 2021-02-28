import React from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import socket from "core/socket";

import { Messages as BaseMessages } from "components";

const Messages = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  isLoading,
  user,
}) => {
  const messagesRef = React.useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  React.useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage);

    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 9999999);
  }, [items]);

  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Messages);
