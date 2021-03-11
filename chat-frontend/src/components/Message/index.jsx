import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button, Popover } from "antd";
import { Emoji } from "emoji-mart";
import reactStringReplace from "react-string-replace";
import { EllipsisOutlined, EyeOutlined } from "@ant-design/icons";

import { Time, IconReaded, Avatar } from "../";

import { convertCurrentTime } from "utils/helpers";

import waveSvg from "assets/img/wave.svg";
import playSvg from "assets/img/play.svg";
import pauseSvg from "assets/img/pause.svg";

import "./Message.scss";
import attachments from "../../redux/reducers/attachments";

const renderAttachments = (attachments) => {
  if (attachments) {
    if (attachments.length > 1) {
    }
  } else {
    return null;
  }
};

const AudioMessage = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const audioElem = React.useRef(null);

  const togglePlay = () => {
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  React.useEffect(() => {
    audioElem.current.volume = "0.1";
    audioElem.current.addEventListener(
      "playing",
      () => {
        setIsPlaying(true);
      },
      false
    );

    audioElem.current.addEventListener(
      "ended",
      () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );

    audioElem.current.addEventListener(
      "pause",
      () => {
        setIsPlaying(false);
      },
      false
    );

    audioElem.current.addEventListener(
      "timeupdate",
      () => {
        const duration = (audioElem.current && audioElem.current.duration) || 0;
        setCurrentTime(audioElem.current.currentTime);
        setProgress((audioElem.current.currentTime / duration) * 100);
      },
      false
    );
  }, []);

  return (
    <div className="message__audio">
      <audio ref={audioElem} src={audioSrc} preload={"auto"} />
      <div
        className="message__audio-progress"
        style={{ width: progress + "%" }}
      />
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlaying ? (
              <img src={pauseSvg} alt="Pause svg" />
            ) : (
              <img src={playSvg} alt="PLay svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSvg} alt="Wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

const Message = ({
  avatar,
  user,
  text,
  date,
  isMe,
  read,
  attachments,
  isTyping,
  onRemoveMessage,
  setImagePreview,
}) => {
  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        // "message--is-audio": audio,
        "message--image": attachments && attachments.length === 1 && !text,
      })}
    >
      <div className={"message__content"}>
        <IconReaded isMe={isMe} isReaded={read} />
        <Popover
          content={
            <div>
              <Button onClick={onRemoveMessage}>Delete</Button>
            </div>
          }
          trigger="click"
        >
          <div className="message__icon-actions">
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </div>
        </Popover>
        <div className={"message__avatar"}>
          <Avatar user={user} />
        </div>
        <div className={"message__info"}>
          {text && (
            <div className={"message__bubble"}>
              {text && (
                <p className={"message__text"}>
                  {reactStringReplace(text, /:(.+?):/g, (match, i) => (
                    <Emoji key={i} emoji={match} set="apple" size={16} />
                  ))}
                </p>
              )}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {/*{audio && <AudioMessage audioSrc={audio} />}*/}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item, index) => {
                return (
                  <div
                    onClick={() => setImagePreview(item.url)}
                    key={index}
                    className="message__attachments-item"
                  >
                    <div className="message__attachments-item-overlay">
                      <EyeOutlined />
                    </div>
                    <img src={item.url} alt={item.fileName} />
                  </div>
                );
              })}
            </div>
          )}

          {date && (
            <span className={"message__date"}>
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.protoTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
