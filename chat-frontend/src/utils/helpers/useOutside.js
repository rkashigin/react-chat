import React from "react";

const useOutside = (el, callback) => {
  const handleClick = (e) => {
    if (el && !el.contains(e.target)) {
      callback();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useOutside;
