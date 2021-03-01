import React from "react";
import orderBy from "lodash/orderBy";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId }) => (
  <div className={"dialogs"}>
    <div className="dialogs__search">
      <Input.Search
        value={inputValue}
        onChange={onSearch}
        placeholder="Search among dialogs"
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map((item) => (
        <DialogItem
          key={item._id}
          isMe={item.author._id === userId}
          currentDialogId={currentDialogId}
          {...item}
        />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No dialogs, sorry..."
      />
    )}
  </div>
);

export default Dialogs;
