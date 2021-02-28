import React from "react";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

import { Status } from "components";
import { Dialogs, Messages, ChatInput } from "containers";

import "./Home.scss";

const Home = () => {
  return (
    <section className={"home"}>
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <TeamOutlined />
              <span className="">All dialogs</span>
            </div>
            <Button shape="circle" icon={<FormOutlined />} />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs userId={0} />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <div className="chat__dialog-header-center">
              <b className="chat__dialog-header-username">Адольф Гитлер</b>
              <div className="chat__dialog-header-status">
                <Status online />
              </div>
            </div>
            <Button shape="circle" icon={<EllipsisOutlined />} />
          </div>
          <div className="chat__dialog-messages">
            <Messages />
          </div>
          <div className="chat__dialog-input">
            <ChatInput />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
