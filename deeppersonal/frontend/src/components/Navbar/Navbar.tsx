// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="nav">
//       <div className="nav__wrapper">
//         <div className="nav__links">
//           <NavLink to="/" className="nav__link">Главная</NavLink>
//           <NavLink to="/services" className="nav__link">Услуги</NavLink>
//           <NavLink to="/about" className="nav__link">Обо мне</NavLink>
//         </div>

//         <div className="nav__cart">
//           <NavLink to="/cart" className="nav__link nav__link--cart">Корзина</NavLink>
//         </div>

//         {/* Бургер */}
//         <div className={`nav__mobile-wrapper ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
//           <div className="nav__mobile-target" />
//           <div className="nav__mobile-menu" onClick={(e) => e.stopPropagation()}>
//             <NavLink to="/" className="nav__link">Главная</NavLink>
//             <NavLink to="/services" className="nav__link">Услуги</NavLink>
//             <NavLink to="/about" className="nav__link">Обо мне</NavLink>
//             <NavLink to="/cart" className="nav__link nav__link--cart">Корзина</NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };




import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Название или логотип */}
        <div className="text-white text-xl font-bold">Ahmed Kashima</div>

        {/* Десктоп-меню */}
        <div className="hidden md:flex gap-6 items-center">
          <NavLink to="/" className="text-white hover:underline">Главная</NavLink>
          <NavLink to="/services" className="text-white hover:underline">Услуги</NavLink>
          <NavLink to="/about" className="text-white hover:underline">Обо мне</NavLink>
          <NavLink
            to="/cart"
            className="bg-white text-blue-600 font-bold px-3 py-1 rounded hover:bg-gray-100"
          >
            Корзина
          </NavLink>
        </div>

        {/* Мобильный бургер */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            {/* Иконка меню */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Выпадающее мобильное меню */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-blue-600">
          <NavLink to="/" className="text-white hover:underline" onClick={toggleMobileMenu}>Главная</NavLink>
          <NavLink to="/services" className="text-white hover:underline" onClick={toggleMobileMenu}>Услуги</NavLink>
          <NavLink to="/about" className="text-white hover:underline" onClick={toggleMobileMenu}>Обо мне</NavLink>
          <NavLink
            to="/cart"
            className="bg-white text-blue-600 font-bold px-3 py-1 rounded hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            Корзина
          </NavLink>
        </div>
      )}
    </nav>
  );
};
