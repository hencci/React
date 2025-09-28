// This interaction with the outside world is called a side-effect.

// We can wrap a calculation inside a useEffect hook to move it outside the rendering calculation. It accepts a callback function with all the calculations.

import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
  });

  return <p>{counter} seconds have passed.</p>;
}

// But, it keeps growing too fast! This is where another argument of the useEffect comes in: the dependency array.
