{
  /* The useRef hook */
}

// The useRef hook lets you manage a value that’s not needed for rendering. They are an alternative to state, as when you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use this hook.

/*    DOM manipulation    */

// When building web applications, sometimes you need more direct control over specific elements in the DOM. The useRef hook comes to the rescue by providing a way to access and interact with those elements.

// Imagine a button on a web page, and you want to focus on that button when the page loads. You could achieve this using the useRef hook. Here’s how it works:

import { useRef, useEffect } from "react";

function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  return <button ref={buttonRef}>Click Me!</button>;
}
