import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online, fullName }) => (
  <div className="chat__dialog-header">
    <div className="chat__dialog-header-center">
      <b className="chat__dialog-header-username">{fullName}</b>
      <div className="chat__dialog-header-status">
        <span
          className={classNames("status", {
            "status--online": online,
          })}
        >
          {online ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  </div>
);

Status.protoTypes = {
  online: PropTypes.bool,
};

export default Status;
