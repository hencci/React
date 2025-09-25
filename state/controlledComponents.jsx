// There are native HTML elements that maintain their own internal state. The input element is a great example

function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

// Instead of letting the input maintain its own state, we define our own state using the useState hook. We then set the value prop of the input to the state variable and update the state variable on every onChange event.
