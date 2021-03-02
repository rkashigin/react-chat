import React from "react";
import { withRouter } from "react-router";

import { Messages, ChatInput, Status, Sidebar } from "containers";

import { dialogsActions } from "redux/actions";

import "./Home.scss";
import { connect } from "react-redux";

const Home = (props) => {
  const { setCurrentDialogId } = props;
  React.useEffect(() => {
    const {
      location: { pathname },
    } = props;
    const dialogId = pathname.split("/").pop();

    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);
  return (
    <section className={"home"}>
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <Status />
          <Messages />
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(
  connect(({ dialogs }) => dialogs, dialogsActions)(Home)
);
