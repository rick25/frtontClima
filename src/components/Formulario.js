import { useState } from "react";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsultar }) => {
  const [error, guardarError] = useState(false);

  const handleChange = (event) => {
    guardarBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);
    guardarConsultar(true);
  };

  const { ciudad, pais } = busqueda;

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>Ambos campos son obligatorios</p>}
      <label htmlFor="ciudad">Ciudad : </label>
      <input
        type="text"
        name="ciudad"
        id="ciudad"
        placeholder="Ingrese una ciudad"
        value={ciudad}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="pais">Pais : </label>
      <select name="pais" id="pais" value={pais} onChange={handleChange}>
        <option value="">Elija un Pais</option>
        <option value="AR">Argentina</option>
        <option value="PE">Peru</option>
        <option value="CO">Colombia</option>
        <option value="MX">Mexico</option>
      </select>
      <br />
      <input type="submit" value="Buscar Clima" />
    </form>
  );
};

export default Formulario;
