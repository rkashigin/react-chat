import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";

import { IconReaded } from "../";

import "./DialogItem.scss";

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "dd.MM.yy");
  }
};

const getAvatar = (avatar) => {
  if (avatar) {
    return <img src={avatar} alt="" />;
  } else {
    // generate avatar
  }
};

const DialogItem = ({ user, message, unreaded, isMe }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">{getAvatar(user.avatar)}</div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullName}</b>
        <span>{getMessageTime(message.created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{message.text}</p>
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
