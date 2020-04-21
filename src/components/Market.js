import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <h2>{props.day}</h2>,
    <h3>{props.location} - Booth: {props.booth}</h3>,
    <h4>{props.hours}</h4>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.booth,
  hours: PropTypes.hours
};



export default Market; 