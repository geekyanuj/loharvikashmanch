import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/members', label: 'Members' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar py-3 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center flex-wrap">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Lohar Vikash Manch Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
          <span className="text-xl md:text-2xl font-bold text-gradient">
            Lohar Vikash Manch
          </span>
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop & Mobile Links */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto gap-2 md:gap-4 mt-4 md:mt-0`}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link text-center md:text-left ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
