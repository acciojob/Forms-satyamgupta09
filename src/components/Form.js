import Card from "./Card";
import React from "react";

export default function Form() {
  return (
    <div>
      <Card>
        <form id="form-link">
          <label>Full Name: </label>
          <input type="text" id="full_name" />

          <label>Email: </label>
          <input type="email" id="email" />

          <label>Password: </label>
          <input type="password" id="password" />

          <label>Confirm Password: </label>
          <input type="password" id="password_confirmation" />

          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
}
