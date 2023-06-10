import { useState } from 'react';

export const useForm = (initialValues) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onReset = (form) => {
    setFormValues(form);
  };

  return { formValues, handleChange, onReset };
};
