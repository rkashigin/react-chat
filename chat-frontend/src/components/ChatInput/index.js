import React from "react";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import "./ChatInput.scss";
import { UploadFiles } from "components";

const { TextArea } = Input;

const ChatInput = (props) => {
  const {
    emojiPickerVisible,
    setValue,
    value,
    toggleEmojiPicker,
    addEmoji,
    handleSendMessage,
    sendMessage,
    attachments,
    onSelectFiles,
  } = props;

  return (
    <>
      <div className="chat-input">
        <div>
          <div className="chat-input__smile-btn">
            <div className="chat-input__emoji-picker">
              {emojiPickerVisible && (
                <Picker
                  set="apple"
                  onSelect={(emojiTag) => addEmoji(emojiTag)}
                />
              )}
            </div>
            <Button
              shape="circle"
              icon={<SmileOutlined />}
              onClick={toggleEmojiPicker}
            />
          </div>
          <TextArea
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleSendMessage}
            placeholder="Enter new message here..."
            value={value}
            autoSize={{ minRows: 1, maxRows: 6 }}
          />
          <div className="chat-input__actions">
            <UploadField
              onFiles={onSelectFiles}
              containerProps={{
                className: "chat-input__actions-upload-btn",
              }}
              uploadProps={{
                accept: ".jpg, .jpeg, .png, .gif, .bmp",
                multiple: true,
              }}
            >
              <Button shape="circle" icon={<CameraOutlined />} />
            </UploadField>
            {value ? (
              <Button
                shape="circle"
                icon={<SendOutlined />}
                onClick={sendMessage}
              />
            ) : (
              <Button shape="circle" icon={<AudioOutlined />} />
            )}
          </div>
        </div>
      </div>
      <div className="chat-input__attachments">
        <UploadFiles attachments={attachments} />
      </div>
    </>
  );
};

export default ChatInput;
