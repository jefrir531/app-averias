const DamageItem = ({ product, onEdit, onDelete }) => {
  const statusColors = {
    Disponible: 'bg-red-100 text-red-800',
    'En proceso': 'bg-amber-100 text-amber-800',
    Reparado: 'bg-green-100 text-green-800',
    Desechado: 'bg-gray-100 text-gray-800'
  };

  const categoryColors = {
    Metal: 'bg-slate-100 text-slate-800',
    Plástico: 'bg-indigo-100 text-indigo-800',
    Electrónico: 'bg-yellow-100 text-yellow-800',
    Mecánico: 'bg-orange-100 text-orange-800',
    Otros: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <div className="flex items-center mt-1 space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[product.category]}`}>
                {product.category}
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${statusColors[product.status]}`}>
                {product.status}
              </span>
            </div>
          </div>
          <span className="text-2xl font-bold text-blue-700">
            ${(product.quantity * product.value).toFixed(2)}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Cantidad</p>
            <p className="font-medium">{product.quantity} {product.unit}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Costo unitario</p>
            <p className="font-medium">${product.value.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Fecha</p>
            <p className="font-medium">{product.date}</p>
          </div>
        </div>

        {product.notes && (
          <div className="mt-4">
            <p className="text-sm text-gray-500">Notas</p>
            <p className="text-gray-700">{product.notes}</p>
          </div>
        )}

        <div className="mt-6 flex space-x-2">
          <button
            onClick={() => onEdit(product)}
            className="text-sm bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(product.id)}
            className="text-sm bg-white border border-gray-300 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DamageItem;