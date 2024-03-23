import React, { useRef } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  // Initialize EmailJS within the component
  (function () {
    emailjs.init("RoOdwecetkbLSmf0W");
  })();

  const sendEmail = (e) => {
    e.preventDefault();

    const params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_armevj1", "template_fry03ja", params)
      .then(
        (res) => {
          alert("Success! " + res.status);
        },
        (error) => {
          console.error("Email not sent", error);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" id="fullname" name="from_name" />
        <label>Email</label>
        <input type="email" id="email_id" name="email_id" />
        <label>Message</label>
        <textarea name="message" id="message" placeholder="Message" />
        <input type="submit" onClick={sendEmail} value="Send" />
      </form>
    </StyledContactForm>
  );
};

const StyledContactForm = styled.div`
  width: 400px;

  form {
    margin-top: 70px;
    margin-bottom: 70px;
    margin-left: 250px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    label {
      color: black;
    }

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 2px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(80, 80, 80);
      color: white;
      border: none;
    }
  }
`;

export default Contact;
