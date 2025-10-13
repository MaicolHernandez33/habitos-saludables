// src/components/atomos/Icono.jsx
import React from "react";

export default function Icono({ src, alt, size = 40 }) {
  return <img src={src} alt={alt} width={size} height={size} />;
}
