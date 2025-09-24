/* In order to stop repeating ourselves by re-defining common values, and to protect our application from undefined values, we can define default parameters to set default values for props */

function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}

// As you can see, we now only need to supply prop values to Button when rendering within App if they differ from the default values defined in the function parameters.
