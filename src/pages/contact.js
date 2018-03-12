import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";

const ContactPage = () => (
  <div>
    <h1>Contact</h1>
    <form name="contact" method="POST" netlify>
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <Button type="submit">Send</Button>
      </p>
    </form>
  </div>
);

export default ContactPage;
