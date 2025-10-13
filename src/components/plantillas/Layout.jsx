import React from "react";
import Header from "./Header";

export default function Layout({ children, totalCompletados, totalHabitos }) {
  return (
    <div>
      <Header totalCompletados={totalCompletados} totalHabitos={totalHabitos} />
      <main className="container my-4">{children}</main>
      <footer className="text-center text-muted py-3 border-top">
        <small>© 2025 Módulo de Seguimiento de Hábitos </small>
      </footer>
    </div>
  );
}
