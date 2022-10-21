import './App.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Forma () {
    const [state, handleSubmit] = useForm("xqknqyqr");
if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
return (
    <div className='form' >
    <form className='form' onSubmit={handleSubmit}
     action="https://formspree.io/f/xqknqyqr"
     method="POST">
    <h3>Pregunta al anunciante</h3>
    <label htmlFor="email">
      Email Address
    </label>
   
    <input
      id="email"
      type="email" 
      name="email"
      />

    <ValidationError 
      prefix="Email" 
      field="email"
      errors={state.errors}
    />
     <label htmlFor="message">
      Your message
    </label>

    <textarea
      id="message"
      name="message"
    />
    <ValidationError 
      prefix="Message" 
      field="message"
      errors={state.errors}
    />

    <button className='button' type="submit" disabled={state.submitting}>
    Contactar
    </button>
  </form>
  </div>
);
}
export default Forma
