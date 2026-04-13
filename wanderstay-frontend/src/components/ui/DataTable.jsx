const DataTable = ({ columns, data = [], loading }) => {
  if (loading) {
    return <p className="p-4">Loading...</p>;
  }

  if (!data.length) {
    return <p className="p-4 text-gray-500">No data found</p>;
  }

  return (
    <table className="w-full border">
      <thead className="bg-gray-100">
        <tr>
          {columns.map((col) => (
            <th key={col.accessor} className="p-2 text-left">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {columns.map((col) => (
              <td key={col.accessor} className="p-2">
                {col.cell ? col.cell(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;