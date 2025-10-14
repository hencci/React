// Type Checking is a process of verifying that a piece of code is using the correct data types for variables, function parameters and return values.

// PropTypes is a way to type check the props that a React component receives. It helps to catch potential type errors during development, making it easier to spot and fix bugs

import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
};

export default RenderName;
