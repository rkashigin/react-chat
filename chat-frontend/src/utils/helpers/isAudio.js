const isAudio = (attachments) => {
  const file = attachments[0];

  return attachments.length && file.ext === "webm";
};

export default isAudio;
