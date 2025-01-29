// <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    <div>
      <h1>Forms</h1>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/ref" element={<FormRef />} />
            <Route path="/state" element={<FormState />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

