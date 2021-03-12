import React from "react";
import { connect } from "react-redux";
import { Empty } from "antd";

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
  removeMessageById,
  attachments,
}) => {
  const messagesRef = React.useRef(null);
  const [imagePreview, setImagePreview] = React.useState(null);
  const [blockHeight, setBlockHeight] = React.useState(135);

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
    messagesRef.current && messagesRef.current.scrollTo(0, 9999999);
  }, [items]);

  React.useEffect(() => {
    if (attachments.length) {
      setBlockHeight(245);
    } else {
      setBlockHeight(135);
    }
  }, [attachments]);

  if (!currentDialogId) {
    return <Empty description="Choose dialog" />;
  }

  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading && !user}
      onRemoveMessage={removeMessageById}
      imagePreview={imagePreview}
      setImagePreview={setImagePreview}
      blockHeight={blockHeight}
    />
  );
};

export default connect(
  ({ dialogs, messages, user, attachments }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    attachments: attachments.items,
    user: user.data,
  }),
  messagesActions
)(Messages);
