import React from "react";
import CardHabito from "../moleculas/CardHabito";
import habits from "../../data/habits";

export default function ListaHabitos({ onToggle, onVerDetalle }) {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {habits.map((habito) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={habito.id}>
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
