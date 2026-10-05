import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home / मुख्य पृष्ठ' },
    { path: '/about', label: 'About / हमारे बारे में' },
    { path: '/events', label: 'Events / कार्यक्रम' },
    { path: '/members', label: 'Members / सदस्य' },
    { path: '/contact', label: 'Contact / संपर्क' },
  ];

  return (
    <nav className="navbar py-4 px-4">
      <div className="container flex justify-between items-center" style={{ flexWrap: 'wrap' }}>
        <Link to="/" className="flex items-center gap-4" style={{ marginBottom: '10px' }}>
          <img src="/logo.png" alt="Lohar Vikash Manch Logo" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
          <span className="text-2xl font-bold text-gradient">
            Lohar Vikash Manch
          </span>
        </Link>
        <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
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
