import React from "react";

const Input = ({ label, error, register, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      
      <input
        {...(register && register(name))}
        className="border p-2 rounded-md focus:outline-blue-500"
        {...props}
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default Input;