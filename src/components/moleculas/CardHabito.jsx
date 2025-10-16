import React, { useState } from "react";
import Icono from "../atomos/Icono";
import Checkbox from "../atomos/Checkbox";
import Boton from "../atomos/Boton";

export default function CardHabito({ habito, onToggle, onVerDetalle }) {
  const [completado, setCompletado] = useState(false);

  const handleChange = () => {
    setCompletado(!completado);
    onToggle(habito.id);
  };

  // 🔹 Creamos una clase dinámica según la categoría
  const categoriaClase = `categoria-${habito.category.toLowerCase()}`;

  return (
    <div
      className={`card shadow h-100 text-center p-3 border-0 ${categoriaClase}`}
      style={{ borderRadius: "1rem" }}
    >
      <div className="card-body d-flex flex-column align-items-center">
        <Icono src={habito.icon} alt={habito.name} size={80} />
        <h5 className="mt-3 fw-bold">{habito.name}</h5>
        <p className="text-muted mb-2">{habito.category}</p>

        <Checkbox
          label="Completado hoy"
          checked={completado}
          onChange={handleChange}
        />

        <div className="mt-auto">
          <Boton texto="Ver Detalle" tipo="primary" onClick={onVerDetalle} />
        </div>
      </div>
    </div>
  );
}
