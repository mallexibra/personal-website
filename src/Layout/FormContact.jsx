import Button from "../Components/ButtonForm";
import FormContainer from "../Components/FormContainer";
import FormInput from "../Components/FormInput";
import FormLabel from "../Components/FormLabel";
import FormTextarea from "../Components/FormTextarea";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const [feed, setFeed] = useState({
    email: "",
    feedback: "",
  });
  const handleForm = async (e) => {
    e.preventDefault();
    toast.success("Feedback has been sent successfully");
    console.log(feed);
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFeed({ ...feed, [name]: value });
  };

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <FormContainer>
        <FormLabel text='Email' id='email'>
          <FormInput
            id='email'
            type='email'
            name='email'
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
            name='feedback'
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
