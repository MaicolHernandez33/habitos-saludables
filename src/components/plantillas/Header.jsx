import React from "react";

export default function Header({ totalCompletados, totalHabitos }) {
  return (
    <header className="bg-success text-white text-center py-3 shadow-sm">
      <h3>Módulo de Hábitos Saludables</h3>
      <p className="mb-0">
        Hábitos completados hoy: <strong>{totalCompletados}</strong> de{" "}
        {totalHabitos}
      </p>
    </header>
  );
}
