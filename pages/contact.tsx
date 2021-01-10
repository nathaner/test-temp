import React from 'react';

export default function Contact() {
  return (
    <section>
      <h2>Contact us</h2>
      <p>
        We are eager to discuss your business needs and answer any questions you
        may have. Enter your details and we’ll get back to you shortly.
      </p>
      <form>
        <div className="form-control">
          <label htmlFor="firstname">
            First name
            <span className="optional"> — Optional</span>
          </label>
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="form-control">
          <label htmlFor="lastname">
            Last name
            <span className="optional"> — Optional</span>
          </label>
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols={50} rows={10}></textarea>
        </div>
        <button className="btn">Send</button>
      </form>
    </section>
  );
}
