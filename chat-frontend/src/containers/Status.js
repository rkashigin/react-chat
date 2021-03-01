import React from "react";
import { Status as BaseStatus } from "components";
import { connect } from "react-redux";

const Status = ({ currentDialogId, user, dialogs }) => {
  if (!dialogs.length || !currentDialogId) {
    return null;
  }

  const currentDialogObj = dialogs.filter(
    (dialog) => dialog._id === currentDialogId
  )[0];

  let partner = {};

  if (currentDialogObj.author._id === user._id) {
    partner = currentDialogObj.partner;
  } else {
    partner = currentDialogObj.author;
  }

  return <BaseStatus online={partner.isOnline} fullName={partner.fullName} />;
};

export default connect(({ dialogs, user }) => ({
  user: user.data,
  dialogs: dialogs.items,
  currentDialogId: dialogs.currentDialogId,
}))(Status);
