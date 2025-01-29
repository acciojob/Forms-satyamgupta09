import React, { useState } from "react";
import Card from "./Card";

export default function FormState() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Card>
        <form id="form-state-link" onSubmit={handleSubmit}>
          <label>Full Name: </label>
          <input
            type="text"
            id="full_name"
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setMail(e.target.value)}
          />

          <label>Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password: </label>
          <input
            type="password"
            id="password_confirmation"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
}
