// src/components/atomos/Boton.jsx
import React from "react";

export default function Boton({ texto, onClick, tipo = "primary" }) {
  return (
    <button className={`btn btn-${tipo} m-1`} onClick={onClick}>
      {texto}
    </button>
  );
}
