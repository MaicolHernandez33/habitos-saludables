import React from "react";
import { render } from "@testing-library/react";
import MisHabitos from "../components/paginas/MisHabitos";

describe("Página MisHabitos", () => {
  it("Renderiza el título del módulo de hábitos saludables", () => {
    const { getByText } = render(<MisHabitos />);
    
    expect(getByText("Módulo de Hábitos Saludables")).toBeTruthy();
  });
});
