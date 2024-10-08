import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    question: '',
  });

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Email is not valid',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
      return true;
    }
  }

  const validateName = () => {
    if (formData.name.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Name needs to be at least 3 characters long',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
      return true;
    }
  }

  const validateQuestion = () => {
    if (formData.question.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        question: 'Please enter a question',
      }));
      return false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, question: '' }));
      return true;
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidQuestion = validateQuestion();

    if (isValidName && isValidEmail && isValidQuestion) {
      // Proceed with form submission if no errors
      console.log('Form submitted successfully!', formData);
      alert("Form submitted successfully!")
    } else {
      console.log('Form has errors');
    }
  };
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={handleChange} onBlur={validateName}/>
        {errors.name!=='' && <p style={{ color: 'tomato' }}>{errors.name}</p>}

        <label htmlFor="email" >Email: </label>
        <input type="email" id="email" name="email" onChange={handleChange} onBlur={validateEmail}/>
        {errors.email!=='' && <p style={{ color: 'tomato' }}>{errors.email}</p>}

        <label htmlFor="question">Send us your question: </label>
        <input type="text" id="question" name="question" onChange={handleChange} onBlur={validateQuestion}/>
        {errors.question!=='' && <p style={{ color: 'tomato' }}>{errors.question}</p>}
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Form;
