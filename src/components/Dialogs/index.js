import React from "react";
import orderBy from "lodash/orderBy";
import isToday from "date-fns/isToday";

import "./Dialogs.scss";
import { DialogItem } from "../";

const Dialogs = ({ items, userId }) => (
  <div className={"dialogs"}>
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
