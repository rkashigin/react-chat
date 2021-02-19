import React from "react";
import { connect } from "react-redux";

import { dialogsActions } from "redux/actions";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ fetchDialogs, setCurrentDialogId, items, userId }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [filtered, setFiltered] = React.useState(Array.from(items));

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

  const onSelectDialog = () => {};

  React.useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltered(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      items={filtered}
      userId={userId}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
