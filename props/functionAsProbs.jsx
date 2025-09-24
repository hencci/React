// In addition to passing variables through to child components as props, you can also pass through functions.

function Button({
  text = "Click Me!",
  color = "blue",
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Button
        handleClick={() => handleButtonClick("https://www.theodinproject.com")}
      />
    </div>
  );
}

/*
The function handleButtonClick is defined in the parent component.
A reference to this function is passed through as the value for the handleClick prop on the Button component.
The function is received in Button and is called on a click event.
*/
