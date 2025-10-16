import React from "react";
import { render } from "@testing-library/react";
import CardHabito from "../components/moleculas/CardHabito";

describe("Componente CardHabito", () => {
  const habito = {
    id: 1,
    name: "Beber agua",
    category: "Salud",
    icon: "/icons/water.jpg",
    history: ["2025-10-12"],
  };

  it("Debería mostrar el nombre del hábito", () => {
    const { getByText } = render(<CardHabito habito={habito} />);
    expect(getByText("Beber agua")).toBeTruthy();
  });

  it("Debería mostrar la categoría del hábito", () => {
    const { getByText } = render(<CardHabito habito={habito} />);
    expect(getByText("Salud")).toBeTruthy();
  });
});
