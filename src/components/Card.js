import React from "react";

export default function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      {children}
    </div>
  );
}
