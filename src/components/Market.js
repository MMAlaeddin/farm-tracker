import React from "react";
import PropTypes from "prop-types";

function Market(props) {
  return (
    <React.Fragment>
      <hr/>
    <h2>{props.day}</h2>
    <h3>{props.location} - Booth: {props.booth}</h3>
    <h4>{props.hours}</h4>
    </React.Fragment>
  );
}

Market.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.string,
  hours: PropTypes.string
};



export default Market; 