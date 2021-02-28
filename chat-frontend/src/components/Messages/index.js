import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({ blockRef, isLoading, items, user }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", {
        "messages--loading": isLoading,
      })}
    >
      {isLoading ? (
        <Spin size="large" tip="Fetching messages..." />
      ) : items && !isLoading ? (
        <div>
          {items.length > 0 ? (
            items.map((item) => (
              <Message
                key={item._id}
                {...item}
                isMe={user._id === item.user._id}
              />
            ))
          ) : (
            <Empty description="Current dialog is empty" />
          )}
        </div>
      ) : (
        <Empty description="Choose a dialog" />
      )}
    </div>
  );
};

Messages.protoTypes = {
  items: PropTypes.array,
};

export default Messages;
