import React from "react";

export default function PanelResumen({ totalCompletados, totalHabitos }) {
  const porcentaje = Math.round((totalCompletados / totalHabitos) * 100);

  return (
    <div className="card text-center shadow-sm p-3 mb-4">
      <h5>Resumen Semanal</h5>
      <p className="mb-1">
        {totalCompletados} de {totalHabitos} hábitos completados
      </p>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${porcentaje}%` }}
        >
          {porcentaje}%
        </div>
      </div>
    </div>
  );
}
