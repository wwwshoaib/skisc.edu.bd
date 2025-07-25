import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Notice from '../Notice/Notice';

const Header = () => {
  return (
    <header className="bg-blue-100 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Logo & Estd. */}
        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
          <div className="bg-white p-1 rounded-full shadow-md border border-blue-300">
            <img
              src="/skisc-logo.jpg"
              alt="School Logo"
              className="h-14 w-14 sm:h-16 sm:w-16 object-cover rounded-full"
            />
          </div>
          <p className="text-sm text-gray-700 mt-1 font-medium tracking-wide">Estd. 1987</p>
        </div>

        {/* School Info */}
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h1 className="text-md sm:text-xl md:text-2xl font-bold text-blue-900 leading-snug">
            The Sylhet Khajanchibari International School & College{' '}
            <span className="block sm:inline text-blue-800">(SKISC)</span>
          </h1>
          <p className="text-sm text-gray-700">Nayasarak, Sylhet-3100, Bangladesh</p>
           <p className="text-sm text-gray-700">
            Principal: <span className="font-semibold text-blue-800">+880 1309 131086</span> &nbsp; | &nbsp;
            Office: <span className="font-semibold text-blue-800">+880 821 719487</span>
          </p>
         
        </div>

        {/* Right Section: EIIN, Edexcel + Social Media (desktop only) */}
        <div className="hidden sm:flex flex-col items-end text-right">
          <p className="text-sm text-gray-700">
            EIIN: <span className="font-semibold text-blue-800">131086</span> &nbsp; | &nbsp;
            Edexcel Intl. Center: <span className="font-semibold text-blue-800">93189</span>
          </p>
          <div className="mt-2 flex gap-3 items-center text-blue-600 text-xl">
            <a href="https://www.facebook.com/skiscedu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
              <FaInstagram />
            </a>
          
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* EIIN + Edexcel + Social Media (mobile) */}
      <div className="sm:hidden px-4 pb-3 text-center">
        <p className="text-sm text-gray-700 mb-2">
          EIIN: <span className="font-semibold text-blue-800">131086</span> &nbsp; | &nbsp;
          Edexcel Intl. Center: <span className="font-semibold text-blue-800">93189</span>
        </p>
        <div className="flex justify-center gap-6 text-blue-600 text-xl">
          <a href="https://www.facebook.com/skiscedu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
         
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
            <FaYoutube />
          </a>
        </div>
      </div>
      {/* Notice */}
      <div className='bg-slate-100 '>
        <Notice></Notice>
      </div>
    
    </header>
  );
};

export default Header;
