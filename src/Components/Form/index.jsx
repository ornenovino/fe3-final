import { useState } from "react";
import './Form.css'

const Form = () => {
  const [error, setError] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);


  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length < 5 || !isValidEmail(email)) {
      setError("Por favor verifique su información nuevamente");
    } else {
      setError(null);
      console.log(`Gracias ${name}, te contactaremos cuando antes vía mail`)
      alert(`Gracias ${name}, te contactaremos cuando antes vía mail`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <button >Submit</button>
        {error && (<p style={{ color: 'red' }}>{error}</p>)}
      </form>
    </div>
  );
};

export default Form;
