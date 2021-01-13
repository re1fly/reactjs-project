import React, { createContext } from "react";
import { Form } from "reactstrap";

export const FormContext = createContext({
  onValueChange: null,
  form: null
});

export default function AwesomeForm({
  children,
  form,
  onChangeForm,
  ...props
}) {
  const onValueChange = e => {
    form = {
      ...form,
      [e.target.name]: e.target.value
    };
    if (typeof onChangeForm === "function") onChangeForm(form);
  };

  const values = {
    onValueChange,
    form
  };

  return (
    <FormContext.Provider value={values}>
      <Form {...props}>{children}</Form>
    </FormContext.Provider>
  );
}
