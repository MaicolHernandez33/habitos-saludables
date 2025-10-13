// src/components/atomos/Input.jsx
import React from "react";

export default function Input({ tipo = "text", valor, onChange, placeholder }) {
  return (
    <input
      type={tipo}
      value={valor}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="form-control my-2"
    />
  );
}
