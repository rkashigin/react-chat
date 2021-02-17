import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Time = ({ date }) => (
  <>{formatDistanceToNow(date, { addSuffix: true })}</>
);
//
// Time.propTypes = {
//   date: PropTypes.date,
// };

export default Time;
