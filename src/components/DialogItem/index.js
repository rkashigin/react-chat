import React from "react";
import classNames from "classnames";

import { Time, IconReaded } from "../";

import "./DialogItem.scss";

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
        alt=""
      />
    );
  } else {
    // generate avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {getAvatar(
        "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Фёдор Достоевский</b>
        <span>
          {/*<Time date={new Date()} />*/}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          aspernatur distinctio explicabo inventore quo voluptatibus.
        </p>
        <IconReaded isMe={true} isReaded={true} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unreaded > 99 ? "99+" : unreaded}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
