import React from "react";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
  CloseOutlined,
  LoadingOutlined,
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
    attachments,
    onSelectFiles,
    onRecord,
    isRecording,
    onHideRecording,
    sendMessage,
    isLoading,
    removeAttachment,
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
          {isRecording ? (
            <div className="chat-input__record-status">
              <i className="chat-input__record-status-bubble" />
              Recording...
              <Button
                className="stop-recording"
                shape="circle"
                icon={<CloseOutlined />}
                onClick={onHideRecording}
              />
            </div>
          ) : (
            <TextArea
              onChange={(e) => setValue(e.target.value)}
              onKeyUp={handleSendMessage}
              placeholder="Enter new message here..."
              value={value}
              autoSize={{ minRows: 1, maxRows: 6 }}
            />
          )}
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
            {isLoading ? (
              <Button
                shape="circle"
                icon={<LoadingOutlined />}
                onClick={sendMessage}
              />
            ) : isRecording || value || attachments.length ? (
              <Button
                shape="circle"
                icon={<SendOutlined />}
                onClick={sendMessage}
              />
            ) : (
              <div className="chat-input__record-btn">
                <Button
                  shape="circle"
                  icon={<AudioOutlined />}
                  onClick={onRecord}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {attachments.length > 0 && (
        <div className="chat-input__attachments">
          <UploadFiles
            attachments={attachments}
            removeAttachment={removeAttachment}
          />
        </div>
      )}
    </>
  );
};

export default ChatInput;
