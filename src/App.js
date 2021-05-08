import { Fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
const App = () => {
  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <section>
        <Formulario />
      </section>
      <section>columna2</section>
    </Fragment>
  );
};

export default App;
