import { useState } from "react";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const handleChange = (event) => {
    guardarBusqueda({
      ...busqueda,
      [event.target.name]: event.target.value,
    });
  };
  const { ciudad, pais } = busqueda;

  return (
    <form>
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
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
