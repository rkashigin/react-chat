import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Time = ({ date }) => (
  <>{formatDistanceToNow(new Date(date), { addSuffix: true })}</>
);

export default Time;
