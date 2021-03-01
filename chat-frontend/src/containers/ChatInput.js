import React from "react";
import { connect } from "react-redux";

import { ChatInput as BaseChatInput } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  if (!currentDialogId) {
    return null;
  }

  return (
    <BaseChatInput
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
