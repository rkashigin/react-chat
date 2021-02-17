import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Time, IconReaded } from "../";

import waveSvg from "assets/img/wave.svg";
import playSvg from "assets/img/play.svg";
import pauseSvg from "assets/img/pause.svg";

import "./Message.scss";

const Message = ({
  avatar,
  user,
  text,
  date,
  audio,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioElem = React.useRef(null);

  const togglePlay = () => {
    audioElem.current.volume = "0.1";
    if (!isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  };

  React.useEffect(() => {
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
  }, []);

  return (
    <div
      className={classNames("message", {
        "message--isme": isMe,
        "message--is-typing": isTyping,
        "message--is-audio": audio,
        "message--image": attachments && attachments.length === 1,
      })}
    >
      <div className={"message__content"}>
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className={"message__avatar"}>
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className={"message__info"}>
          {(audio || text || isTyping) && (
            <div className={"message__bubble"}>
              {text && <p className={"message__text"}>{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <audio ref={audioElem} src={audio} preload={"auto"} />
                  <div
                    className="message__audio-progress"
                    style={{ width: "40%" }}
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
                    <span className="message__audio-duration">00:19</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {attachments && (
            <div className="message__attachments">
              {attachments.map((item) => {
                return (
                  <div className="message__attachments-item">
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

const Message1 = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => (
  <div
    className={classNames("message", {
      "message--isme": isMe,
      "message--is-typing": isTyping,
      "message--image": attachments && attachments.length === 1,
    })}
  >
    <div className={"message__content"}>
      <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className={"message__avatar"}>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className={"message__info"}>
        {(text || isTyping) && (
          <div className={"message__bubble"}>
            {text && <p className={"message__text"}>{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        )}
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => {
              return (
                <div className="message__attachments-item">
                  <img src={item.url} alt={item.fileName} />
                </div>
              );
            })}
        </div>
        {date && (
          <span className={"message__date"}>
            <Time date={date} />
          </span>
        )}
      </div>
    </div>
  </div>
);

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
