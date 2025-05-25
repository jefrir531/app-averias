const DamageHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-indigo-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">AveriasJJ</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-200 transition-colors">Dashboard</a></li>
            <li><a href="#" className="hover:text-blue-200 transition-colors">Averías</a></li>
            <li><a href="#" className="hover:text-blue-200 transition-colors">Reportes</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DamageHeader;