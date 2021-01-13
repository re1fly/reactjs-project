import React, { useContext } from "react";
import { Input as BsInput } from "reactstrap";
import { FormContext } from "./FormHooks";

export default function Input(props) {
  const { name } = props;
  const { onValueChange, form } = useContext(FormContext);
  return <BsInput {...props} value={form[name]} onChange={onValueChange} />;
}