const Header = () => {
    return (
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-blue-600 hover:text-blue-800 transition">Home</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  