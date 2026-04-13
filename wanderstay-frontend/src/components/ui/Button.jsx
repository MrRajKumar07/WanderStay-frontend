import React from "react";
import clsx from "clsx";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black",
  danger: "bg-red-600 text-white",
  ghost: "bg-transparent hover:bg-gray-100",
};

const Button = ({ children, variant = "primary", loading, disabled, ...props }) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded-lg flex items-center justify-center gap-2",
        variants[variant],
        (disabled || loading) && "opacity-50 cursor-not-allowed"
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="animate-spin">⏳</span>}
      {children}
    </button>
  );
};

export default Button;