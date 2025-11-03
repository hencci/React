{
  /* The useMemo hook */
}

// The useMemo hook provides a way to add memoization inside our components. It’s used to optimize expensive or complex calculations where it caches the result of a function call and stores it to be used later without recalculating it

{
  /* Memoizing expensive calculations*/
}

import { useMemo } from "react";

function Cart({ products }) {
  const totalPrice = useMemo(() => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [products]);

  return (
    <div>
      {/* Some other content in the cart */}
      {/* Products to display */}
      <p>
        Total Price: <strong>${totalPrice}</strong>
      </p>
      {/* Some button to checkout */}
    </div>
  );
}

// In the example above, we can easily memoize the calculated value by wrapping it in a useMemo, as the syntax is pretty much the same as useEffect and almost works the same.
// Where useMemo will also execute the callback on mount, and on subsequent re-renders, it will only re-execute the callback whenever one of the dependencies changes. In our case, whenever the products prop changes.
