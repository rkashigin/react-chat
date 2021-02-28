import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Time = ({ date }) => (
  <>{formatDistanceToNow(new Date(date), { addSuffix: true })}</>
);

export default Time;
