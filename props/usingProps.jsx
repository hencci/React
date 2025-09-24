// In React, data is transferred from parent components to child components via props.
// This data transfer is unidirectional, meaning it flows in only one direction.
// Using props, we can account for any number of variations with a single component

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };

  return <button style={buttonStyle}>{props.text}</button>;
}

export default function App() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}

// There are a few things going on here.

/*The Button functional component now receives props as a function argument. The individual properties are then referenced within the component via props.propertyName.
When rendering the Button components within App, the prop values are defined on each component.
Inline styles are dynamically generated and then applied to the button element.*/
