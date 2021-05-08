import PropTypes from "prop-types";

const Clima = ({ datosAPI }) => {
  const { name, weather, main } = datosAPI;
  if (!weather) return null;
  return (
    <div>
      <h2>{`El clima de ${name} es :`}</h2>
      <p>
        {`${parseFloat(main.temp - 273.15).toFixed(2)}`} <span> &#x2103; </span>
      </p>
      <p>
        Temperatura Maxima :{" "}
        {`${parseFloat(main.temp_max - 273.15).toFixed(2)}`}{" "}
        <span> &#x2103; </span>
      </p>
      <p>
        Temperatura Minima :{" "}
        {`${parseFloat(main.temp_min - 273.15).toFixed(2)}`}{" "}
        <span> &#x2103; </span>
      </p>
    </div>
  );
};

Clima.propTypes = {
  datosAPI: PropTypes.object.isRequired,
};

export default Clima;
