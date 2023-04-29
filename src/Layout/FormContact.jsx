import Button from "../Components/ButtonForm";
import FormContainer from "../Components/FormContainer";
import FormInput from "../Components/FormInput";
import FormLabel from "../Components/FormLabel";
import FormTextarea from "../Components/FormTextarea";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormContact = () => {
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Feedback has been sent successfully");
  };
  return (
    <form onSubmit={(e) => handleForm(e)}>
      <FormContainer>
        <FormLabel text='Email' id='email'>
          <FormInput
            id='email'
            type='email'
            placeholder='Input your email...'
          />
        </FormLabel>
      </FormContainer>
      <FormContainer>
        <FormLabel text='Feedback' id='feedback'>
          <FormTextarea id='feedback' placeholder='Input your feedback' />
        </FormLabel>
      </FormContainer>
      <FormContainer>
        <Button type='submit'>Give me a Feedback</Button>
        <ToastContainer />
      </FormContainer>
    </form>
  );
};

export default FormContact;
