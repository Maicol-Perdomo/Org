import "./Campo.css";

const Campo = (props) => {
  const { placeholder, type = "text", titulo, required, valor } = props;

  const placeholderModificado = `${placeholder}...`;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={required}
        value={valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
