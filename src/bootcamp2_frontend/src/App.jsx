import { useState } from 'react';
import { bootcamp2_backend } from 'declarations/bootcamp2_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const lastname = event.target.elements.lastname.value;
    const age = event.target.elements.age.value;
    bootcamp2_backend.greet(name, lastname, parseInt(age)).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <label htmlFor="lastname">Enter your name: &nbsp;</label>
        <input id="lastname" alt="LastName" type="text" />
        <label htmlFor="age">Enter your name: &nbsp;</label>
        <input id="age" alt="Age" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
    </main>
  );
}

export default App;
