import React from "react";
import { connect } from "react-redux";

import { ChatInput as BaseChatInput } from "components";

import { messagesActions, attachmentsActions } from "redux/actions";
import socket from "core/socket";

import { filesApi } from "utils/api";

const ChatInput = (props) => {
  const {
    dialogs: { currentDialogId },
    attachments,
    fetchSendMessage,
    setAttachments,
    removeAttachment,
    user,
  } = props;

  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const [value, setValue] = React.useState("");
  const [isRecording, setIsRecording] = React.useState("");
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

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

  const onRecording = (stream) => {
    const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
    setMediaRecorder(recorder);

    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = () => {
      setIsRecording(false);
    };

    recorder.ondataavailable = (e) => {
      const file = new File([e.data], "audio.webm", { type: "audio/webm" });

      setIsLoading(true);

      filesApi.upload(file).then(({ data }) => {
        sendAudio(data.file._id).then(() => {
          setIsLoading(false);
        });
      });
    };
  };

  const onHideRecording = () => {
    setIsRecording(false);
  };

  const onError = (err) => {
    console.log("An error has occurred", err.message);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
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
    if (isRecording) {
      mediaRecorder.stop();
    } else if (value) {
      fetchSendMessage({
        text: value,
        dialogId: currentDialogId,
        attachments: attachments.map((file) => file.uid),
      });

      setValue("");
      setAttachments([]);
    }
  };

  const sendAudio = (audioId) => {
    return fetchSendMessage({
      text: null,
      dialogId: currentDialogId,
      attachments: [audioId],
    });
  };

  const handleSendMessage = (e) => {
    socket.emit("DIALOGS:TYPING", { dialogId: currentDialogId, user });
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
      attachments={attachments}
      onSelectFiles={onSelectFiles}
      isRecording={isRecording}
      onRecord={onRecord}
      onHideRecording={onHideRecording}
      sendMessage={sendMessage}
      isLoading={isLoading}
      removeAttachment={removeAttachment}
    />
  );
};

export default connect(
  ({ dialogs, attachments, user }) => ({
    dialogs,
    attachments: attachments.items,
    user: user.data,
  }),
  {
    ...messagesActions,
    ...attachmentsActions,
  }
)(ChatInput);
