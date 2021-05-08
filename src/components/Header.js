import PropTypes from "prop-types";

const Header = ({ titulo }) => {
  return (
    <nav style={{ textAlign: "center", backgroundColor: "yellow" }}>
      <a href="!#">{titulo}</a>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
