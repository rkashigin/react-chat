import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded, Avatar } from "../";

const getMessageTime = (created_at) => {
  const date = new Date(created_at);

  if (isToday(date)) {
    return format(date, "HH:mm");
  } else {
    return format(date, "dd.MM.yy");
  }
};

const DialogItem = ({
  _id,
  user,
  text,
  created_at,
  unreaded,
  isMe,
  onSelect,
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullName}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={true} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 99 ? "99+" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
