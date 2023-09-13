import { useState } from "react";

// Pagina 2: Contacto
// En esta pagina deberán implementar un Form (con sus validaciones pertinentes) que capture la información del usuario que desea contactar con la empresa. Los campos serán los siguientes:

// Nombre completo (con longitud mayor a 5)
// Email (con formato correcto de email)
// En caso de haber un error mostrar el siguiente mensaje de error: Por favor verifique su información nuevamente
// Una vez "enviado"( no se envía a ningún servidor pero podemos mostrar por consola los datos submiteados) el formulario deberán mostrar un mensaje de éxito que contenga el siguiente formato: Gracias [nombre del usuario], te contactaremos cuando antes vía mail


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

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
          <input className="ml-2 rounded-lg bg-blue-300 focus:bg-blue-200" type="text" name="name" onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input className="ml-2 rounded-lg bg-blue-300 focus:bg-blue-200" type="text" name="email" onChange={(event) => setEmail(event.target.value)} />
        </label>
        <input className="rounded-lg bg-gray-200 hover:bg-gray-500 hover:text-white" type="submit" value="Submit" />
        {error && (<p style={{ color: 'red' }}>{error}</p>)}
      </form>
    </div>
  );
};

export default Form;
