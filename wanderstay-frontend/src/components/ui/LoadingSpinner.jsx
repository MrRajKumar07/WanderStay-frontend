const sizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

const LoadingSpinner = ({ size = "md" }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`animate-spin rounded-full border-4 border-blue-500 border-t-transparent ${sizes[size]}`}
      />
    </div>
  );
};

export default LoadingSpinner;