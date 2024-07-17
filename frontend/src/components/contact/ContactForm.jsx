import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formHandler = (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: fullName,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_hc6fu8l", 
        "template_y7ucmnb", 
        templateParams,
        "tHH7Zj6o7G5Csa5SZ" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setErrorMessage("Message sent successfully!");
          setFullName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setErrorMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className={`${styles["contact-form"]} container sections-padding`}>
      <div data-aos="fade-down">
        <p className="paragraph">Welcome To Muscle up</p>
        <h2>Get In Touch With Us</h2>
        <p>
          If you have any feedback or questions about our clubs, our website or
          our services in general, please contact us by filling out the form.
        </p>
        <h3>Open Hours</h3>
        <p>
          <span>Mon – Saturday :</span> 06.00 AM to 12.00 PM
        </p>
        <p>
          <span>Location :</span> Himachal Pradesh (Shimla Lower Chakkar)
        </p>
      </div>
      <div data-aos="fade-up">
        <h2>Send Us a Message</h2>
        <p>Your email address will not be published *</p>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          <p>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
