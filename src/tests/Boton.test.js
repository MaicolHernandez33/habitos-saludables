import React from "react";
import { render } from "@testing-library/react";
import Boton from "../components/atomos/Boton";

describe("Componente Boton", () => {
  it("Debería renderizar el texto del botón correctamente", () => {
    const { getByText } = render(<Boton texto="Guardar" />);
    expect(getByText("Guardar")).toBeTruthy();
  });

  it("Debería ejecutar la función onClick al hacer clic", () => {
    const mockFn = jasmine.createSpy("onClick");
    const { getByText } = render(<Boton texto="Click" onClick={mockFn} />);
    getByText("Click").click();
    expect(mockFn).toHaveBeenCalled();
  });
});
