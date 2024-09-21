import cl from "./Button.module.css"
// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      className={`${cl.button} ${disabled ? cl.disabledButton : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;