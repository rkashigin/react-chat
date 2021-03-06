import React from "react";
import classNames from "classnames";
import format from "date-fns/format";
import isToday from "date-fns/isToday";
import { Link } from "react-router-dom";

import { IconReaded, Avatar } from "../";
import { isAudio } from "utils/helpers";

const getMessageTime = (createdAt) => {
  const date = new Date(createdAt);

  if (isToday(date)) {
    return format(date, "HH:mm");
  } else {
    return format(date, "dd.MM.yy");
  }
};

const renderLastMessage = (message, userId) => {
  let text = "";

  if (!message.text && message.attachments.length) {
    text = "Attached file(s)";
  } else {
    text = message.text;
  }

  return `${message.user._id === userId ? "You: " : ""}${text}`;
};

const DialogItem = ({
  _id,
  isMe,
  currentDialogId,
  partner,
  userId,
  lastMessage,
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": partner.isOnline,
        "dialogs__item--selected": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={partner} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{partner.fullName}</b>
          <span>{getMessageTime(lastMessage.createdAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{renderLastMessage(lastMessage, userId)}</p>
          {isMe && <IconReaded isMe={isMe} isReaded={lastMessage.read} />}
          {lastMessage.unread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.unread > 99 ? "99+" : lastMessage.unread}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
