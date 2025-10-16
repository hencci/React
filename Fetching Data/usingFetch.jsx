// Whenever a component needs to make a request as it renders, it’s often best to wrap that fetch inside of an effect.

import { useEffect, useState } from "react";

const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error));
  }, []);

  return (
    imageURL && (
      <>
        <h1>An image</h1>
        <img src={imageURL} alt={"placeholder text"} />
      </>
    )
  );
};

export default Image;

// useState lets us add the imageURL state, whereas useEffect allows us to perform side effects.
// In this case, the side effect is fetching data from an external API.
// Since we need to fetch the data only once when the component mounts, we pass an empty dependency array.
