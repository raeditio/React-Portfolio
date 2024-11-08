import React from 'react';

function About() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, feel free to send a message.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default About;
