import { useEffect, useState } from "react";

export function Historial() {
  const [cotizaciones, setcotizaciones] = useState([]);

  useEffect(() => {
    // Recupera los datos del LocalStorage
    const cotizacionesGuardadas = JSON.parse(localStorage.getItem("cotizacion")) || [];
    setcotizaciones(cotizacionesGuardadas);
  }, []);

  return (
    <div>
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className=" center div-cotizador">
        <table>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {cotizaciones.map(
              (
                {
                  fecha,
                  propiedad,
                  ubicacion,
                  mts2,
                  poliza,
                },
                index
              ) => (
                <tr key={index}>
                  <td>{fecha}</td>
                  <td>{propiedad}</td>
                  <td>{ubicacion}</td>
                  <td>{mts2}</td>
                  <td>{poliza}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="center separador">
          <button
            onClick={() => window.history.back()}
            className="button button-outline">
            VOLVER
          </button>
        </div>
      </div>
    </div>
  );
}

export default Historial;
