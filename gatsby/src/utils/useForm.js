import { useState } from 'react';

export default function useForm(input) {
  const [values, setValues] = useState(input);

  function updateValues(e) {
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  return { values, updateValues };
};