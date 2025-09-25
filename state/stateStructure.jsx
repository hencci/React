/*Managing and structuring state effectively is by far one of the most crucial parts of building your application. If not done correctly, it can become a source of bugs and headaches.*/

/* State should not be mutated */

/*to the React documentation, we should treat state as if it was immutable. To change state, we should always use the setState function, which in the case of the example below is the setPerson function.*/

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}
