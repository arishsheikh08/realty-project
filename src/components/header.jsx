// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import searchIcon from '../../src/assets/icons/search.png';
// import glory44logo from '../assets/images/glory44logo.jpg'


// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import ThemeChanger from './themeChanger';

// const Header = () => {
//   const [header, setHeader] = useState(false);
//   const [headerColor, setHeaderColor] = useState('transparent');
//   const [headerText, setHeaderText] = useState('white');

//   const handleHeader = () => {
//     setHeader(!header);
//   };

//   const handleMobileHeader = () => {
//     setHeader(false);
//   };

//   useEffect(() => {
//     const handleColorChange = () => {
//       if (window.scrollY >= 250) {
//         setHeaderColor('linear-gradient(to right, #8e2de2, #4a00e0)');
//         setHeaderText('#ffffff');
//       } else {
//         setHeaderColor('transparent');
//         setHeaderText('#ffffff');
//       }
//     };
//     window.addEventListener('scroll', handleColorChange);
//   }, []);

//   return (
//     <div
//       style={{ background: `${headerColor}` }}
//       className=" fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
//     >
//       {/* Menu + Name */}

//       <div className="max-w-[1240px] m-5 flex justify-between items-center p-4">
//         <Link href="/">
//           {/* <h1
//             style={{ color: `${headerText}` }}
//             className="py-2 text-2xl font-bold hover:text-orange-500"
//           >
//             Glory 44
//           </h1> */}
//         </Link>
//         <div className=" p-5 hidden sm:flex">
//         <Image src={glory44logo} alt="Menu" className="w-20 h-16 md:w-24 md:h-20 lg:w-32 lg:h-24" />
//       </div>
//       </div>

//       {/* Search */}

     

//       {/* navbar Links */}

//       <ul
//         style={{ color: `${headerText}` }}
//         className="text-sm font-bold hidden sm:flex
//       "
//       >
//         <li className=" p-4 hover:text-orange-500">
//           <Link href="#about-container">About</Link>
//         </li>
//         <li className=" p-4 hover:text-orange-500">
//           <Link href="#services">Services</Link>
//         </li>
//         <li className=" p-4 hover:text-orange-500">
//           <Link href="#reviews">Reviews</Link>
//         </li>
//         <li className=" p-4 hover:text-orange-500">
//           <Link href="#contact">Contact</Link>
//         </li>
//       </ul>

//       <p
//         style={{ color: `${headerText}` }}
//         className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer"
//       >
//         Get In Touch
//       </p>
//       <div className="mr-10">
//         <ThemeChanger />
//       </div>

//       {/* Mobile hamburgerMenu */}

//       <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
//         {header ? (
//           <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
//         ) : (
//           <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
//         )}
//       </div>
//       <div
//         className={
//           header
//             ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
//             : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
//         }
//       >
//         <ul
//           style={{ color: `${headerText}` }}
//           className="text-sm font-bold 
//       "
//         >
//           <li className="mx-7 py-4 text-4xl hover:text-orange-500">
//             <Link href="#about-container" onClick={handleMobileHeader}>
//               About
//             </Link>
//           </li>
//           <li className="mx-7 py-4 text-4xl hover:text-orange-500">
//             <Link href="#services" onClick={handleMobileHeader}>
//               Services
//             </Link>
//           </li>
//           <li className="mx-7 py-4 text-4xl hover:text-orange-500">
//             <Link href="#deals" onClick={handleMobileHeader}>
//               Deals
//             </Link>
//           </li>
//           <li className="mx-7 py-4 text-4xl hover:text-orange-500">
//             <Link href="#reviews" onClick={handleMobileHeader}>
//               Gallery
//             </Link>
//           </li>
//           <li className="mx-7 py-4 text-4xl hover:text-orange-500">
//             <Link href="#contact" onClick={handleMobileHeader}>
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import glory44logo from '../assets/images/glory44logo.jpg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import ThemeChanger from './themeChanger';

const Header = () => {
  const [header, setHeader] = useState(false);
  const [headerColor, setHeaderColor] = useState('transparent');
  const [headerText, setHeaderText] = useState('white');

  const handleHeader = () => {
    setHeader(!header);
  };

  const handleMobileHeader = () => {
    setHeader(false);
  };

  useEffect(() => {
    const handleColorChange = () => {
      if (window.scrollY >= 250) {
        setHeaderColor('linear-gradient(to right, #8e2de2, #4a00e0)');
        setHeaderText('#ffffff');
      } else {
        setHeaderColor('transparent');
        setHeaderText('#ffffff');
      }
    };
    window.addEventListener('scroll', handleColorChange);
  }, []);

  return (
    <div
      style={{ background: `${headerColor}` }}
      className="fixed top-0 left-0 w-full h-20 shadow-xl flex justify-between items-center z-40 ease-in duration-300"
    >
      {/* Logo */}
      <div className="max-w-[1240px] mx-auto flex justify-between items-center p-4 w-full">
        <Link href="/">
          <div className="relative w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-18">
            <Image
              src={glory44logo}
              alt="Glory 44 Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-md" // Apply border radius here
            />
          </div>
        </Link>
        {/* Navbar Links */}
        <ul
          style={{ color: `${headerText}` }}
          className="text-sm font-bold hidden sm:flex"
        >
          <li className="p-4 hover:text-orange-500">
            <Link href="#about-container">About</Link>
          </li>
          <li className="p-4 hover:text-orange-500">
            <Link href="#services">Services</Link>
          </li>
          {/* <li className="p-4 hover:text-orange-500">
            <Link href="#reviews">Reviews</Link>
          </li> */}
          <li className="p-4 hover:text-orange-500">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <p
          style={{ color: `${headerText}` }}
          className="hidden sm:flex text-sm font-bold ml-10 mr-5 hover:text-orange-500 cursor-pointer"
        >
           <Link href="#contact">Get In Touch</Link>
        </p>
        <div className="mr-10">
          <ThemeChanger />
        </div>
        {/* Mobile Hamburger Menu */}
        <div onClick={handleHeader} className="block sm:hidden p-4 z-10">
          {header ? (
            <AiOutlineClose size={30} style={{ color: `${headerText}` }} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${headerText}` }} />
          )}
        </div>
        <div
          className={
            header
              ? 'sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#020308ea] text-center ease-in duration-300'
          }
        >
          <ul
            style={{ color: `${headerText}` }}
            className="text-sm font-bold"
          >
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#about-container" onClick={handleMobileHeader}>
                About
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#services" onClick={handleMobileHeader}>
                Services
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#deals" onClick={handleMobileHeader}>
                Deals
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#reviews" onClick={handleMobileHeader}>
                Gallery
              </Link>
            </li>
            <li className="mx-7 py-4 text-4xl hover:text-orange-500">
              <Link href="#contact" onClick={handleMobileHeader}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
