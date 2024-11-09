const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  icon,
  placeholder,
  size,
}) => {
  return (
    <label className="form-control capitalize">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>

      <div className="relative">
        {/* Input field */}
        <input
          name={name}
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className={`input input-bordered w-full ${
            icon ? "pl-10" : ""
          } ${size}`} // Conditionally add padding
        />

        {/* Icon inside the input, using absolute positioning */}
        {icon && (
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            {icon}
          </span>
        )}
      </div>
    </label>
  );
};

export default FormInput;
