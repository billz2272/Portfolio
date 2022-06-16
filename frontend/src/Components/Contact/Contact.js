import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { RiWhatsappLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>zimmerw21@gmail.com</h5>
            <a href="mailto:zimmerw21@gmail.com" target="_blank">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"  />
            <h4>Messenger</h4>
            <h5>Zimmers stuff</h5>
            <a
              href="https://facebook.com/profile.php?id=100069794324957"
              target="_blank"
            >
              {" "}
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappLine  className="contact__option-icon"/>
            <h4>Whats App</h4>
            <h5>520-906-1927</h5>
            <a
              href="https://api.whatsapp.com/send?phone = 5209061927"
              target="_blank"
            > send message</a>
          </article>
        </div>
      </div>
      {/* end of contact options */}

      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="Email" placeholder="Your Email" required />
        <textarea
          name="Messege"
          rows="7"
          placeholder="Your Message Here" required></textarea>
          
        
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
