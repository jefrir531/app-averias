import { useState, useEffect } from 'react';
import DamageHeader from './components/DamageHeader';
import DamageForm from './components/DamageForm';
import DamageList from './components/DamageList';
import DamageStats from './components/DamageStats';
import damagedProducts from './mock/products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Simular carga de datos
    setProducts(damagedProducts);
  }, []);

  const handleAddProduct = (product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? product : p));
      setEditingProduct(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    if (editingProduct && editingProduct.id === id) {
      setEditingProduct(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DamageHeader />
      
      <main className="container mx-auto py-8 px-4">
        <DamageForm 
          onAddProduct={handleAddProduct} 
          product={editingProduct} 
        />
        
        <DamageStats products={products} />
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Averías</h2>
        
        <DamageList 
          products={products} 
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
        />
      </main>
    </div>
  );
};

export default App;

// DONE