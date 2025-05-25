const WasteStats = ({ products }) => {
  const stats = {
    totalItems: products.length,
    totalWeight: products.reduce((sum, p) => sum + (p.unit === 'kg' ? p.quantity : 0), 0),
    totalValue: products.reduce((sum, p) => sum + (p.quantity * p.value), 0),
    byCategory: products.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {})
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Resumen de Residuos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
          <p className="text-sm text-emerald-800 font-medium">Total de Registros</p>
          <p className="text-3xl font-bold text-emerald-600">{stats.totalItems}</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-sm text-blue-800 font-medium">Peso Total (kg)</p>
          <p className="text-3xl font-bold text-blue-600">{stats.totalWeight.toLocaleString()}</p>
        </div>
        
        <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
          <p className="text-sm text-teal-800 font-medium">Valor Total</p>
          <p className="text-3xl font-bold text-teal-600">${stats.totalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-700 mb-4">Distribución por Categoría</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(stats.byCategory).map(([category, count]) => (
            <div key={category} className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200">
              <span className="text-gray-700 font-medium">{category}</span>
              <span className="ml-2 text-gray-500">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WasteStats;