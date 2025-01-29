import React, { useRef } from "react";
import Card from "./Card";

export default function FormRef() {
  const fullName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fullName.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(confirmPassword.current.value);
  };

  return (
    <div>
      <Card>
        <form id="form-ref-link" onSubmit={handleSubmit}>
          <label>Full Name: </label>
          <input type="text" id="full_name" ref={fullName} />

          <label>Email: </label>
          <input type="email" id="email" ref={email} />

          <label>Password: </label>
          <input type="password" id="password" ref={password} />

          <label>Confirm Password: </label>
          <input
            type="password"
            id="password_confirmation"
            ref={confirmPassword}
          />

          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
}
