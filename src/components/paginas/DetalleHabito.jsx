import React from "react";
import Layout from "../plantillas/Layout";

export default function DetalleHabito({ habito, onVolver }) {
  if (!habito) return null;

  const totalDias = habito.history.length;
  const consejos = {
    Salud: "Mantén una buena hidratación y un descanso adecuado.",
    Ejercicio: "Realiza actividad física constante, aunque sea suave.",
    Alimentación: "Prefiere alimentos frescos y naturales.",
    Bienestar: "Dedica momentos para ti, relájate y medita."
  };

  return (
    <Layout totalCompletados={totalDias} totalHabitos={7}>
      <div className="text-center mt-4">
        <h3>{habito.name}</h3>
        <p className="text-muted">Categoría: {habito.category}</p>
        <img
          src={habito.icon}
          alt={habito.name}
          width="100"
          height="100"
          className="mb-3"
        />
        <h5>📅 Historial de días cumplidos</h5>
        <ul className="list-group mx-auto" style={{ maxWidth: "300px" }}>
          {habito.history.map((fecha, i) => (
            <li key={i} className="list-group-item">
              {fecha}
            </li>
          ))}
        </ul>

        <div className="mt-4 p-3 border rounded bg-light">
          <h5>💡 Consejo:</h5>
          <p>{consejos[habito.category] || "Sigue con tu progreso diario."}</p>
        </div>

        <button className="btn btn-secondary mt-4" onClick={onVolver}>
          ← Volver
        </button>
      </div>
    </Layout>
  );
}
