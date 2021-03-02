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
  const [value, setValue] = React.useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);
  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);

      setValue("");
    }
  };

  const addEmoji = (obj) => {
    const { colons } = obj;
    setValue(`${value} ${colons}`.trim());
  };

  const handleClick = ($el, e) => {
    if ($el && !$el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };

  React.useEffect(() => {
    const $el = document.querySelector(".chat-input__smile-btn");

    document.addEventListener("click", handleClick.bind(this, $el));

    return () => {
      document.removeEventListener("click", handleClick.bind(this, $el));
    };
  }, []);

  return (
    <>
      <div className="chat-input">
        <div className="chat-input__smile-btn">
          <div className="chat-input__emoji-picker">
            {emojiPickerVisible && (
              <Picker set="apple" onSelect={(emojiTag) => addEmoji(emojiTag)} />
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
            onFiles={(files) => {
              console.log(files);
            }}
            containerProps={{
              className: "chat-input__actions-upload-btn",
            }}
            uploadProps={{
              accept: ".jpg,.jpeg.png,.gif,.bmp",
              multiple: true,
            }}
          >
            <Button shape="circle" icon={<CameraOutlined />} />
          </UploadField>
          {value ? (
            <Button shape="circle" icon={<SendOutlined />} />
          ) : (
            <Button shape="circle" icon={<AudioOutlined />} />
          )}
        </div>
      </div>
      <div>
        <UploadFiles />
      </div>
    </>
  );
};

export default ChatInput;
