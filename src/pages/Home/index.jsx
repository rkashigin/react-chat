import React from "react";

import { Message, Dialogs } from "components";

import "./Home.scss";

const Home = () => {
  return (
    <section className={"home"}>
      <Dialogs
        userId={0}
        items={[
          {
            _id: "d95b2b8d46ebc680284bb1e90692f8d4",
            text: "Зачем я тут зарегистрировался",
            created_at: new Date("2021-02-15"),
            user: {
              _id: "d95b2b8d46ebc680284bb1e90692f8d4",
              fullName: "Аркадий Васильев",
              avatar: null,
            },
          },
          {
            _id: "d95b2b8d46ebc680284bb1e90692f8d4",
            text: "Привет, как у тебя дела вообще?",
            created_at: new Date("2021-02-16"),
            user: {
              _id: "d95b2b8d46ebc680284bb1e90692f8d4",
              fullName: "Адольф Гитлер",
              avatar:
                "https://yandex-images.naydex.net/Q5ksr1214/47185bsiW/4SD0lf6GGcXK_kXStOJSJ9I-k-wL2ByMRuV1jSFf34WIPt2a6me75EV6aC-5Wb9s4KX57f8KFMDt-vbQyl-0xvxg8Oy21iSw7r8d98Wevs83giME5iydbMZMZOkdQpvh9GPpYgYutn1sE1FK6FEjEdUdMHmCe_nxobe39Fqn_ZZdtTFxunoAQT4zwWYcwvYng9KnnD4kXaDqnCDhgXJPWHw3BfafEpLtlNclXmRpR01RVbz1RjdV9SnLs1yCM5W2-Yk9tbZWJDXGszmq9Bbm8z9aJyhO7AlISjAc0WVqx8T8t-U6m-Ju9RRnkcK8URdldX3U7SJHfX0B-59YnvtxStGFlf2G-kwpFr8t0hAecitrHnOYUth51DYgJLV5dgMsbCPVxu9qduHwr_GCvOkjqa05eF1u8xnNEWfPHNLH5Rr5BZVtJh4EbcqnxeKECuq_p2KX7NJIMaxeaFSFgeYLsFQvrSqzjp6BeDtZwsjRp1k5lVS1TneF8V2Dhxwa59F64SnRJTp6wO2yy3VuJG4ia3M2s6CC7IEogtDEMfUKXygQ760ms_aaXRDnPe50PRe5ud3QMYL76YFhO2OoFjuR7gnJHRmeZnDZji95Lmh-_vMjEqdA5kTdyLrMrGEBwhco7DtlOluiqvno--0WKKHzHYFt9OVCm50pnSfjCBIDwe7pPWX9bvoEwc5L5V7Qav53a5a33J4o3WQKYBSJcd6fwNif4aYT8qIJ7DeZxsyZ8yXd4Vhdrhe99T3D60weuyXOpUGltYIWyEGquy1mlHp2ayMy6_TyXO2w3thANUG60yD0j_XOc3LCdXgPXQ4svX9pdXHEpWaf6S0xA_NkAufZPg0dZQmeNrDt0sMp7hRmHlfzpneo8vB9UM4sBNXpsjugrJMJmmN-Oh00Y_WetBn_fQlBSBVG2zlxkSe3nEpXbW4Fiam55hasyZq3VXYcihb_EzoDRP7IgeyGnFDB-Q4c",
            },
          },
        ]}
      />
      <Message
        avatar={
          "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"
        }
        date={new Date("2021-02-15")}
        audio={
          "https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
        }
      />

      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"*/}
      {/*  }*/}
      {/*  text={*/}
      {/*    "Hello! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa exercitationem hic inventore iusto minima minus officia pariatur velit voluptatem!"*/}
      {/*  }*/}
      {/*  date={new Date() - 300000}*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      fileName: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/random/100x100?i=1",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      fileName: "image2.jpg",*/}
      {/*      url: "https://source.unsplash.com/random/100x100?i=2",*/}
      {/*    },*/}
      {/*    {*/}
      {/*      fileName: "image3.jpg",*/}
      {/*      url: "https://source.unsplash.com/random/100x100?i=3",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun3-11.userapi.com/s/v1/ig2/M0dmukLQiGesw2R-pLW8pER33xiyZIXGhVE1wtXRe0p8F1DdlZ0f9ZYGT7i0ok7rrBe5A0BhgpIqbhj1cpx6M9JF.jpg?size=100x0&quality=96&crop=0,0,1000,1000&ava=1"*/}
      {/*  }*/}
      {/*  text={"hello, World!"}*/}
      {/*  date={new Date() - 100000}*/}
      {/*  isMe={true}*/}
      {/*  isReaded={true}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"*/}
      {/*  }*/}
      {/*  attachments={[*/}
      {/*    {*/}
      {/*      fileName: "image1.jpg",*/}
      {/*      url: "https://source.unsplash.com/random/100x100?i=1",*/}
      {/*    },*/}
      {/*  ]}*/}
      {/*/>*/}
      {/*<Message*/}
      {/*  avatar={*/}
      {/*    "https://sun3-10.userapi.com/vIhQCAnSp4ltHQl_41qY-BER1VsUVmqeSA2aFQ/cOzJ_UEvsDE.jpg"*/}
      {/*  }*/}
      {/*  isTyping*/}
      {/*/>*/}
    </section>
  );
};

export default Home;
