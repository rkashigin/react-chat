import React from "react";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday";
import { Input, Empty } from "antd";

import { DialogItem } from "../";

import "./Dialogs.scss";

const Dialogs = ({ items, userId, onSearch, inputValue }) => (
  <div className={"dialogs"}>
    <div className="dialogs__search">
      <Input.Search
        value={inputValue}
        onChange={onSearch}
        placeholder="Search among contacts"
      />
    </div>
    {items.length ? (
      orderBy(items, ["created_at"], ["desc"]).map((item) => (
        <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
      ))
    ) : (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="No such dialog, sorry..."
      />
    )}
  </div>
);

export default Dialogs;
