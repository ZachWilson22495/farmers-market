import React from "react";
import PropTypes from "prop-types";
function Produce(props){
  return (
    <React.Fragment>
      <h3>{props.month}</h3>
      <p>{props.selection.map((produce) =>
        <li>{produce}</li>
      )}</p>
      <hr/>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};
export default Produce;