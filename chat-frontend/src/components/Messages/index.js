import React from "react";
import PropTypes from "prop-types";
import { Modal, Empty, Spin } from "antd";
import classNames from "classnames";

import { Message } from "../";

import "./Messages.scss";

const Messages = ({
  onRemoveMessage,
  blockRef,
  isLoading,
  items,
  user,
  imagePreview,
  setImagePreview,
  blockHeight,
}) => {
  return (
    <div
      className="chat__dialog-messages"
      style={{ height: `calc(100% - ${blockHeight}px)` }}
    >
      <div
        ref={blockRef}
        className={classNames("messages", {
          "messages--loading": isLoading,
        })}
      >
        {isLoading && !user ? (
          <Spin size="large" tip="Fetching messages..." />
        ) : items && !isLoading ? (
          items.length > 0 ? (
            items.map((item) => (
              <Message
                key={item._id}
                {...item}
                isMe={user._id === item.user._id}
                onRemoveMessage={onRemoveMessage.bind(this, item._id)}
                setImagePreview={setImagePreview}
              />
            ))
          ) : (
            <Empty description="Current dialog is empty" />
          )
        ) : (
          <Empty description="Choose a dialog" />
        )}
        <Modal
          visible={!!imagePreview}
          onCancel={() => setImagePreview(null)}
          footer={null}
        >
          <img
            src={imagePreview}
            style={{ width: "100%" }}
            alt="Image preview"
          />
        </Modal>
      </div>
    </div>
  );
};

Messages.protoTypes = {
  items: PropTypes.array,
};

export default Messages;
