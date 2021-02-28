import React from "react";

import { generateAvatarFromHash } from "utils/helpers";

import "./Avatar.scss";

const Avatar = ({ user }) => {
  if (user.avatar) {
    return (
      <img
        className={"avatar"}
        src={user.avatar}
        alt={`Avatar ${user.fullName}`}
      />
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullName.charAt(0).toUpperCase();

    return (
      <div
        className={"avatar avatar--symbol"}
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
      >
        {firstChar}
      </div>
    );
  }
};

export default Avatar;
