import React from "react";
import { connect } from "react-redux";
import { Empty } from "antd";
import find from "lodash/find";

import { messagesActions } from "redux/actions";
import socket from "core/socket";

import { Messages as BaseMessages } from "components";

const Messages = ({
  currentDialog,
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
  const [isTyping, setIsTyping] = React.useState(false);

  let typingTimeoutId = null;

  const onNewMessage = (data) => {
    addMessage(data);
  };

  const toggleIsTyping = () => {
    setIsTyping(true);

    clearInterval(typingTimeoutId);
    typingTimeoutId = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  React.useEffect(() => {
    if (currentDialog) {
      fetchMessages(currentDialog._id);
    }

    socket.on("SERVER:NEW_MESSAGE", onNewMessage);

    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
  }, [currentDialog]);

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

  React.useEffect(() => {
    socket.on("DIALOGS:TYPING", toggleIsTyping);

    return () => {
      socket.remove("DIALOGS:TYPING", toggleIsTyping);
    };
  }, []);

  if (!currentDialog) {
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
      isTyping={isTyping}
      partner={
        user._id !== currentDialog.partner._id
          ? currentDialog.author
          : currentDialog.partner
      }
    />
  );
};

export default connect(
  ({ dialogs, messages, user, attachments }) => ({
    currentDialog: find(dialogs.items, { _id: dialogs.currentDialogId }),
    items: messages.items,
    isLoading: messages.isLoading,
    attachments: attachments.items,
    user: user.data,
  }),
  messagesActions
)(Messages);
