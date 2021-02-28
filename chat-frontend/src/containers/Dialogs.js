import React from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
import socket from "core/socket";

import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({
  fetchDialogs,
  setCurrentDialogId,
  currentDialogId,
  items,
  userId,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const [filtered, setFiltered] = React.useState(Array.from(items));

  const onNewDialog = (data) => {
    fetchDialogs();
  };

  const onChangeInput = (e) => {
    const value = e.target.value;
    setFiltered(
      items.filter(
        (dialog) =>
          dialog.user.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  React.useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }

    socket.on("SERVER:DIALOG_CREATED", onNewDialog);

    return () => {
      socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
    };
  }, [items]);

  return (
    <BaseDialogs
      items={filtered}
      userId={userId}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
