import React from "react";
import { connect } from "react-redux";

import { filesApi } from "utils/api";

import { ChatInput as BaseChatInput } from "components";

import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  const [value, setValue] = React.useState("");
  const [attachments, setAttachments] = React.useState([]);
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);

  React.useEffect(() => {
    const $el = document.querySelector(".chat-input__smile-btn");

    document.addEventListener("click", handleClick.bind(this, $el));

    return () => {
      document.removeEventListener("click", handleClick.bind(this, $el));
    };
  }, []);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleClick = ($el, e) => {
    if ($el && !$el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };

  const addEmoji = (obj) => {
    const { colons } = obj;
    setValue(`${value} ${colons}`.trim());
  };

  const sendMessage = () => {
    fetchSendMessage(value, currentDialogId, attachments);
    setValue("");
    setAttachments([]);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const onSelectFiles = async (files) => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded.push({
        name: file.name,
        status: "uploading",
        uid,
      });

      setAttachments(uploaded);

      await filesApi.upload(file).then(({ data }) => {
        uploaded = uploaded.map((item) => {
          if (item.uid === uid) {
            return {
              uid: data.file._id,
              name: data.file.filename,
              url: data.file.url,
              status: "done",
            };
          }
          return item;
        });
      });
    }
    setAttachments(uploaded);
  };

  if (!currentDialogId) {
    return null;
  }

  return (
    <BaseChatInput
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleClick={handleClick}
      addEmoji={addEmoji}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
