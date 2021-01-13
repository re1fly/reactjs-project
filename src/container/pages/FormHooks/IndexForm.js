import React, { useState } from "react";
import { FormGroup, Button } from "reactstrap";
import FormHooks from "./FormHooks";
import Input from "./Input";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

function indexForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: ""
  });

  const onRegister = e => {
    e.preventDefault();
    alert("nama anda : " + form.name);
  };

  return (
    <div className="App">
      <h2>Register</h2>
      <FormHooks form={form} onSubmit={onRegister} onChangeForm={setForm}>
        <FormGroup>
          <label>Nama</label>
          <Input type="text" name="name" />
        </FormGroup>
        <FormGroup>
          <label>Email</label>
          <Input type="email" name="email" />
        </FormGroup>
        <FormGroup>
          <label>Alamat</label>
          <Input type="textarea" name="address" />
        </FormGroup>
        <button type="button" class="btn btn-dark">Submit</button>
      </FormHooks>
      <hr />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default indexForm;