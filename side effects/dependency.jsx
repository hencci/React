// An array of dependencies allows the hook to re-render only when those dependencies are changed.

// We pass an empty array in this example because we do not want the useEffect hook to run anytime other than the initial component render.

import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  }, []);

  return <p>{counter} seconds have passed.</p>;
}

// On a general note, the following block does a good job of summing this point up

useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
