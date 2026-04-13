const DatePicker = ({ label, register, name, min, max }) => {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type="date"
        min={min}
        max={max}
        {...(register && register(name))}
        className="border p-2 rounded"
      />
    </div>
  );
};