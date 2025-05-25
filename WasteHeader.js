const WasteHeader = () => {
  return (
    <header className="bg-gradient-to-r from-emerald-800 to-teal-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">WasteFlow</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-emerald-200 transition-colors">Dashboard</a></li>
            <li><a href="#" className="hover:text-emerald-200 transition-colors">Residuos</a></li>
            <li><a href="#" className="hover:text-emerald-200 transition-colors">Reportes</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default WasteHeader;