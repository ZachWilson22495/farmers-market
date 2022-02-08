import React from "react";
import PropTypes from "prop-types";

function ScheduleDay(props) {
  return (
    <React.Fragment>
        <h3>{props.days}</h3>
          <ul>
            <li>{props.location}</li>
            <li>{props.hours}</li>
            <li>{props.booth}</li>
          </ul>
      <hr />
    </React.Fragment>
  );
}

ScheduleDay.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default ScheduleDay;