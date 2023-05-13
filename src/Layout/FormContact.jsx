import Button from "../Components/ButtonForm";
import FormContainer from "../Components/FormContainer";
import FormInput from "../Components/FormInput";
import FormLabel from "../Components/FormLabel";
import FormTextarea from "../Components/FormTextarea";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const [feed, setFeed] = useState({});
  const form = useRef();
  const handleForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ttubcmf",
        "template_1tmbq69",
        form.current,
        "-NGYANhsVQMdF28SI"
      )
      .then(
        (result) => {
          toast.success("Feedback has been sent successfully");
          console.log(result.text);
        },
        (error) => {
          toast.warning("Something went wrong!");
          console.log(error.text);
        }
      );
    // console.log(feed);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFeed({ ...feed, [name]: value });
  };

  return (
    <form ref={form} onSubmit={(e) => handleForm(e)}>
      <FormContainer>
        <FormLabel text='Name' id='name'>
          <FormInput
            id='name'
            type='text'
            name='to_name'
            placeholder='Input your name...'
            change={(e) => {
              handleChangeInput(e);
            }}
          />
        </FormLabel>
        <FormLabel text='Email' id='email'>
          <FormInput
            id='email'
            type='email'
            name='from_name'
            placeholder='Input your email...'
            change={(e) => {
              handleChangeInput(e);
            }}
          />
        </FormLabel>
      </FormContainer>
      <FormContainer>
        <FormLabel text='Feedback' id='feedback'>
          <FormTextarea
            id='feedback'
            name='message'
            change={(e) => {
              handleChangeInput(e);
            }}
            placeholder='Input your feedback'
          />
        </FormLabel>
      </FormContainer>
      <FormContainer>
        <Button type='submit'>Give me a Feedback</Button>
        <ToastContainer theme='dark' />
      </FormContainer>
    </form>
  );
};

export default FormContact;
