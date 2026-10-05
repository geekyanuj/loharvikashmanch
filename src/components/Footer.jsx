import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer px-4">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pb-8 border-b border-slate-700">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
            <h3 className="text-xl md:text-2xl font-bold text-white">Lohar Vikash Manch</h3>
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
        
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-slate-300 text-base md:text-lg mb-2">
            Empowering the community in Dhanbad and East India regions.
          </p>
          <p className="text-slate-300 mb-6 text-sm md:text-base">
            धनबाद और पूर्वी भारत क्षेत्रों में समुदाय को सशक्त बनाना।
          </p>
          <div className="text-slate-500 font-medium text-xs md:text-sm">
            &copy; {new Date().getFullYear()} Lohar Vikash Manch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
