import React from "react";
import { Result } from "antd";

import { userApi } from "utils/api";
import { Block } from "components";

const renderTextInfo = (hash, verified) => {
  if (hash) {
    if (verified) {
      return {
        status: "success",
        message: "Account has been successfully verified!",
      };
    } else {
      return {
        status: "error",
        message: "Error occured while verifying the account",
      };
    }
  } else {
    return {
      status: "success",
      message: "A confirmation letter has been sent to your E-Mail address!",
    };
  }
};

export const CheckInfo = ({ location }) => {
  const [verified, setVerified] = React.useState(false);
  const hash = location.search.split("hash=")[1];
  const info = renderTextInfo(hash, verified);

  React.useEffect(() => {
    if (hash) {
      userApi.verifyHash(hash).then(({ data }) => {
        if (data.status === "success") {
          setVerified(true);
        }
      });
    }
  });

  return (
    <div>
      <Block>
        <Result
          status={info.status}
          title={info.status === "success" ? "All done!" : "Sorry:("}
          subTitle={info.message}
        />
      </Block>
    </div>
  );
};
