import React, { useState } from 'react';

import '../../assets/contact.css'

import { validateEmail } from '../../utils/helpers'



function Contact () {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        console.log('Submit Form', formState);
      }
    };
  
    const handleChange = (e) => {
      if (e.target.name === 'email') {
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Your email is invalid.');
        } else {
          setErrorMessage('');
        }
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
        console.log('Handle Form', formState);
      }
    };
  
    return (
      <section>
        <h1 data-testid="h1tag">Contact me</h1>
        <form class="flex-box" id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button class="button" type="submit">Submit</button>
        </form>

        {/* <h2>Contact info</h2>
      <div class="contactinfo">
       P: 562-555-0257
       Github: <a href="https://github.com/khuggins1">Follow my work</a><br></br>
        <a href="https://linkedin.com/in/kassim-huggins">Linkedin</a>
</div> */}
       </section>

    )
    
  }

export default Contact;


