import { useState } from 'react';

const DamageForm = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Metal',
    quantity: '',
    unit: 'kg',
    status: 'Disponible',
    value: '',
    date: new Date().toISOString().substr(0, 10),
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      ...formData,
      id: Date.now(),
      quantity: Number(formData.quantity),
      value: Number(formData.value)
    });
    setFormData({
      name: '',
      category: 'Metal',
      quantity: '',
      unit: 'kg',
      status: 'Disponible',
      value: '',
      date: new Date().toISOString().substr(0, 10),
      notes: ''
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Registrar Nueva Avería</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Categoría</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="Metal">Metal</option>
            <option value="Plástico">Plástico</option>
            <option value="Electrónico">Electrónico</option>
            <option value="Mecánico">Mecánico</option>
            <option value="Otros">Otros</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Cantidad</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Unidad</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="kg">kg</option>
            <option value="unidades">unidades</option>
            <option value="m">metros</option>
            <option value="L">litros</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Costo Unitario ($)</label>
          <input
            type="number"
            step="0.01"
            name="value"
            value={formData.value}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Estado</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="Disponible">Disponible</option>
            <option value="En proceso">En proceso</option>
            <option value="Reparado">Reparado</option>
            <option value="Desechado">Desechado</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Notas</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-sm"
          >
            Registrar Avería
          </button>
        </div>
      </form>
    </div>
  );
};

export default DamageForm;