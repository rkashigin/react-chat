import React from "react";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

import { Message, Dialogs, Status, ChatInput } from "components";

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
          <div className="chat__sidebar-search">
            <Input.Search placeholder="Search among contacts" />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs
              userId={0}
              items={[
                {
                  _id: "9138e830da339ad3755b18a73309754e",
                  text:
                    "Deserunt excepteur adipisicing non in. Voluptate sit ullamco tempor dolore officia incididunt. Mollit minim deserunt eiusmod laborum irure occaecat.",
                  created_at: "Tue Jul 11 2017 12:25:32 GMT+0000 (UTC)",
                  user: {
                    _id: "9138e830da339ad3755b18a73309754e",
                    fullName: "Lakeisha Glover",
                    avatar: null,
                  },
                },
                {
                  _id: "4c696f593fb9cf92155741acd93f3d80",
                  text:
                    "In ullamco sint ipsum aliquip proident consequat. Ullamco nostrud anim ipsum eu exercitation aute dolor anim enim dolor eiusmod proident. Elit incididunt pariatur esse tempor.",
                  created_at: "Fri Jul 06 1990 23:38:20 GMT+0000 (UTC)",
                  user: {
                    _id: "4c696f593fb9cf92155741acd93f3d80",
                    fullName: "Ruby Gillespie",
                    avatar: null,
                  },
                },
                {
                  _id: "ae5cee6f829ec454b0cc71c64998b955",
                  text:
                    "Nisi aliqua irure in incididunt. Voluptate in minim duis sint non ea nulla irure esse pariatur irure ad. Est ea cillum ex ipsum elit magna aliquip anim laboris elit aute mollit.",
                  created_at: "Tue Dec 10 2002 01:27:42 GMT+0000 (UTC)",
                  user: {
                    _id: "ae5cee6f829ec454b0cc71c64998b955",
                    fullName: "Villarreal Cote",
                    avatar: null,
                  },
                },
                {
                  _id: "0f89cfb5f270e7dae7da5859944d4839",
                  text:
                    "Labore officia nisi eu veniam officia occaecat ex tempor deserunt nulla officia cupidatat. Voluptate in qui et consequat voluptate exercitation consequat velit est reprehenderit sit aliqua esse. Nulla fugiat enim officia commodo ex magna adipisicing in eiusmod aliquip voluptate.",
                  created_at: "Mon Jun 05 2017 17:08:48 GMT+0000 (UTC)",
                  user: {
                    _id: "0f89cfb5f270e7dae7da5859944d4839",
                    fullName: "Browning Holcomb",
                    avatar: null,
                  },
                },
                {
                  _id: "fdf523da638a2fa6273ee2add3e5d954",
                  text:
                    "Excepteur est exercitation occaecat nisi ipsum enim velit cillum incididunt consectetur veniam ullamco dolor commodo. Et aute pariatur ad pariatur sit sint tempor do eiusmod sint nisi amet. Cillum exercitation laboris nulla elit id ea.",
                  created_at: "Sat Oct 29 2005 14:06:55 GMT+0000 (UTC)",
                  user: {
                    _id: "fdf523da638a2fa6273ee2add3e5d954",
                    fullName: "Day Marquez",
                    avatar: null,
                  },
                },
                {
                  _id: "000b6667da35b2e40a816aa62f496501",
                  text:
                    "Et excepteur non aliquip ad pariatur duis irure nostrud. Sit nulla excepteur ea qui anim magna ipsum eiusmod velit consectetur. Sit voluptate cillum do veniam qui commodo sunt.",
                  created_at: "Tue Aug 24 2010 11:13:16 GMT+0000 (UTC)",
                  user: {
                    _id: "000b6667da35b2e40a816aa62f496501",
                    fullName: "Sophie Spencer",
                    avatar: null,
                  },
                },
                {
                  _id: "cd958380589d2e31582f4737607b96bd",
                  text:
                    "Dolor anim adipisicing enim quis ad et. Laborum enim consequat consequat quis laboris. Esse voluptate ex nostrud pariatur pariatur laborum ullamco fugiat deserunt.",
                  created_at: "Thu Oct 01 2015 09:38:48 GMT+0000 (UTC)",
                  user: {
                    _id: "cd958380589d2e31582f4737607b96bd",
                    fullName: "Shannon Cherry",
                    avatar: null,
                  },
                },
                {
                  _id: "5a42cf600b0037c8250f3ebafed28ac6",
                  text:
                    "Cillum cillum aliqua amet deserunt dolore consectetur ipsum pariatur est laborum adipisicing nostrud. Amet eiusmod elit anim non laborum aliquip nostrud officia ullamco sunt quis. In commodo adipisicing est nostrud ut ullamco.",
                  created_at: "Thu Jul 28 2011 22:20:39 GMT+0000 (UTC)",
                  user: {
                    _id: "5a42cf600b0037c8250f3ebafed28ac6",
                    fullName: "Bridges Benton",
                    avatar: null,
                  },
                },
                {
                  _id: "c9e94243f9e6d7c7ef96f97dfb1eb0aa",
                  text:
                    "Sunt officia tempor irure ullamco. Et irure dolor ut incididunt qui irure anim non labore culpa proident ea nostrud mollit. Ut sint cupidatat anim labore nostrud.",
                  created_at: "Wed Nov 26 1997 02:55:26 GMT+0000 (UTC)",
                  user: {
                    _id: "c9e94243f9e6d7c7ef96f97dfb1eb0aa",
                    fullName: "Maritza Nash",
                    avatar: null,
                  },
                },
                {
                  _id: "48c52336e6af6bc0f3ec313e85186e45",
                  text:
                    "Lorem deserunt culpa nulla minim cupidatat laborum duis non et commodo. Labore eiusmod duis laboris tempor velit occaecat id aliquip in. Ut fugiat deserunt duis ut culpa cupidatat eu aliquip in sunt.",
                  created_at: "Sun Apr 03 2005 05:43:32 GMT+0000 (UTC)",
                  user: {
                    _id: "48c52336e6af6bc0f3ec313e85186e45",
                    fullName: "French Barlow",
                    avatar: null,
                  },
                },
              ]}
            />
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
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              date={new Date("2021-02-15")}
              audio={
                "https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
              }
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
              attachments={[
                {
                  fileName: "image1.jpg",
                  url: "https://source.unsplash.com/random/100x100?i=1",
                },
                {
                  fileName: "image2.jpg",
                  url: "https://source.unsplash.com/random/100x100?i=2",
                },
                {
                  fileName: "image3.jpg",
                  url: "https://source.unsplash.com/random/100x100?i=3",
                },
              ]}
            />
            <Message
              avatar={
                "https://sun3-11.userapi.com/s/v1/ig2/M0dmukLQiGesw2R-pLW8pER33xiyZIXGhVE1wtXRe0p8F1DdlZ0f9ZYGT7i0ok7rrBe5A0BhgpIqbhj1cpx6M9JF.jpg?size=100x0&quality=96&crop=0,0,1000,1000&ava=1"
              }
              text={"hello, World!"}
              date={new Date() - 100000}
              isMe={true}
              isReaded={true}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              attachments={[
                {
                  fileName: "image1.jpg",
                  url: "https://source.unsplash.com/random/100x100?i=1",
                },
              ]}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
            <Message
              avatar={
                "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
              }
              text={
                "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
              }
              date={new Date() - 300000}
            />
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
