import React from "react";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter new message here..."
        size="large"
      />
      <div className="chat-input__actions">
        <Button shape="circle" icon={<CameraOutlined />} />
        {value ? (
          <Button shape="circle" icon={<SendOutlined />} />
        ) : (
          <Button shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
