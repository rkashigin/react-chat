import React from "react";
import { connect } from "react-redux";

import { messagesActions } from "redux/actions";
import { Messages as BaseMessages } from "components";

const Messages = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = React.useRef(null);

  React.useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 9999999);
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Messages);
