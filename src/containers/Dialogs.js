import React from "react";

import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
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

  return (
    <BaseDialogs
      items={filtered}
      userId={userId}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
