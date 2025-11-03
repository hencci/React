{
  /* The useCallback hook */
}

// The useCallback hook provides another way to memoize a value, not just any value like useMemo.
// It can only memoize a function

import { useCallback } from "react";

// Inside a component
// Without useCallback
const handleClick = () => setCount((prevState) => prevState + 1);

// With useCallback
const handleClick = useCallback(
  () => setCount((prevState) => prevState + 1),
  []
);
// or
const memoizedHandleClick = useCallback(handleClick, []);

// There’s nothing extra to useCallback other than it only memoizes functions. So the main difference between useMemo and useCallback is just the type of value it returns.
