// Notice that every time the useEffect hook runs, a new setInterval is used. When the component is unmounted the first time, setInterval is not stopped, it keeps incrementing. This unnecessary behavior can be prevented by clearing the interval when the component is unmounted and that is where the third part of our useEffect hook comes in - the cleanup function.

import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);

  return <p>{counter} seconds have passed.</p>;
}

// You can return a function from the callback in the useEffect hook, which will be executed each time before the next effect is run, and one final time when the component is unmounted. In this case, we cleaned up the interval with a cleanup function.
