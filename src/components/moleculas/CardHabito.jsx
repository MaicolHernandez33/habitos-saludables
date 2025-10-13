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

  return (
    <div className="card shadow-sm p-3 mb-3 text-center">
      <Icono src={habito.icon} alt={habito.name} size={50} />
      <h5 className="mt-2">{habito.name}</h5>
      <p className="text-muted">{habito.category}</p>
      <Checkbox
        label="Completado hoy"
        checked={completado}
        onChange={handleChange}
      />
      <Boton texto="Ver Detalle" tipo="primary" onClick={onVerDetalle} />
    </div>
  );
}
