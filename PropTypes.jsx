// Type Checking is a process of verifying that a piece of code is using the correct data types for variables, function parameters and return values.

// PropTypes is a way to type check the props that a React component receives. It helps to catch potential type errors during development, making it easier to spot and fix bugs

import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string,
};

RenderName.defaultProps = {
  name: "Henry",
  //  With the help of the defaultProps property we are defining a default value for the name prop. This way, if the RenderName component is called without passing in the name prop, it will default to “Henry”.
};

export default RenderName;

// In this example, the component RenderName expects to receive a prop called name which is a string. If this prop is not a string, a warning will be displayed.
