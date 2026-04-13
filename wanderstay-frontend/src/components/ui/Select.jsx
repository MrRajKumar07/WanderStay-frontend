const Select = ({ label, options = [], register, name, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>

      <select {...(register && register(name))} className="border p-2 rounded">
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
};