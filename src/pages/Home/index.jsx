import React from "react";

import { Message } from "../../components";

import "./Home.scss";

const Home = () => {
  return (
    <section className={"home"}>
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
        text={
          "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"
        }
        date={new Date() - 100000}
        isMe={true}
        isReaded={true}
      />
    </section>
  );
};

export default Home;
