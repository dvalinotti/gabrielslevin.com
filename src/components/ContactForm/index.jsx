import React from 'react';
import style from './contact.module.less';

export default function ContactForm() {
  return (
    <div className={style.contactFormContainer}>
      <div className={style.contactFormHeader}>
        <h1>Get in Touch</h1>
      </div>
      <form name="contact" netlify-honeypot="bot-field" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Subject: <input name="subject"></input></label>
        </p>
        <p>
          <label>Message: <textarea rows="4" name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">SUBMIT</button>
        </p>
      </form>
    </div>
  );
}
