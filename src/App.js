import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";

const App = () => {
  const [consultar, guardarConsultar] = useState(false);
  const [datosAPI, guardarDatosAPI] = useState({});
  const [error, guardarError] = useState(false);
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const apikey = process.env.REACT_APP_API_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apikey}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarConsultar(false);
        guardarDatosAPI(resultado);
        resultado.cod === "404" ? guardarError(true) : guardarError(false);
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <section>
        <Formulario
          busqueda={busqueda}
          guardarBusqueda={guardarBusqueda}
          guardarConsultar={guardarConsultar}
        />
      </section>
      <section>
        {!error ? <Clima datosAPI={datosAPI} /> : <p>Ciudad no encontrada.</p>}
      </section>
    </Fragment>
  );
};

export default App;
