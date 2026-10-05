import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-color)' }}>
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Logo" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
            <h3 className="text-2xl font-bold text-gradient">Lohar Vikash Manch</h3>
          </div>
          
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center max-w-2xl" style={{ margin: '0 auto' }}>
          <p className="text-secondary text-lg mb-2">
            Empowering the community in Dhanbad and East India regions.
          </p>
          <p className="text-secondary mb-6">
            धनबाद और पूर्वी भारत क्षेत्रों में समुदाय को सशक्त बनाना।
          </p>
          <div className="text-secondary font-medium" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Lohar Vikash Manch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
