import tinycolor from "tinycolor2";

const getCorrectIndexOfChar = (char) => {
  const number = char.charCodeAt(0);

  return number > 255 ? 255 : number < 0 ? 0 : number;
};

export default (hash) => {
  const [r, g, b] = hash.substr(0, 3).split("").map(getCorrectIndexOfChar);

  return {
    color: tinycolor({ r, g, b }).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(40).toHexString(),
  };
};
