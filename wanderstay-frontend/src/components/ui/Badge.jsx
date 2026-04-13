const statusStyles = {
  CONFIRMED: "bg-green-100 text-green-700",
  PENDING: "bg-yellow-100 text-yellow-700",
  CANCELLED: "bg-red-100 text-red-700",
  COMPLETED: "bg-blue-100 text-blue-700",
};

const Badge = ({ status }) => {
  return (
    <span className={`px-2 py-1 rounded text-sm ${statusStyles[status]}`}>
      {status}
    </span>
  );
};

export default Badge;