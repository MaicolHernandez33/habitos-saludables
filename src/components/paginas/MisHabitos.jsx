import React, { useState } from "react";
import Layout from "../plantillas/Layout";
import PanelResumen from "../plantillas/PanelResumen";
import ListaHabitos from "../organismos/ListaHabitos";
import DetalleHabito from "./DetalleHabito";
import habits from "../../data/habits";

export default function MisHabitos() {
  const [completados, setCompletados] = useState([]);
  const [habitoSeleccionado, setHabitoSeleccionado] = useState(null);

  const handleToggle = (id) => {
    setCompletados((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleVerDetalle = (habito) => {
    setHabitoSeleccionado(habito);
  };

  const handleVolver = () => {
    setHabitoSeleccionado(null);
  };

  return habitoSeleccionado ? (
    <DetalleHabito habito={habitoSeleccionado} onVolver={handleVolver} />
  ) : (
    <Layout
      totalCompletados={completados.length}
      totalHabitos={habits.length}
    >
      <PanelResumen
        totalCompletados={completados.length}
        totalHabitos={habits.length}
      />
      <ListaHabitos onToggle={handleToggle} onVerDetalle={handleVerDetalle} />
    </Layout>
  );
}
