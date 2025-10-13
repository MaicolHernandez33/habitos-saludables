import React from "react";
import CardHabito from "../moleculas/CardHabito";
import habits from "../../data/habits";

export default function ListaHabitos({ onToggle, onVerDetalle }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {habits.map((habito) => (
          <div className="col-md-4" key={habito.id}>
            <CardHabito
              habito={habito}
              onToggle={onToggle}
              onVerDetalle={() => onVerDetalle(habito)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
