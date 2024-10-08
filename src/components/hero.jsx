// import Image from 'next/image';
// import React from 'react';
// import heroBg from '../assets/images/heroBackground.png';
// import arrowIcon from '../assets/icons/arrow.png';
// import phoneIcon from '../assets/icons/contact.png';
// import mailIcon from '../assets/icons/mail.png';

// const Hero = () => {
//   const showMoreBtn = () => {
//     document
//       .getElementById('about-container')
//       .scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="flex flex-col w-full h-screen ">
//       <Image
//         src={heroBg}
//         alt="bg image"
//         fill
//         className="w-full h-screen bg-no-repeat rounded-b-4xl object-cover object-center"
//       />
//       <div className="w-full h-screen relative ">
//         <div className="relative h-screen text-center flex flex-col justify-center items-center">
         
//           <h1 className="font-normal text-7xl text-center mt-24 text-white capitalize">
//             Glory 44 -
//             <br /> A NH 44 Touch Layout
//           </h1>
//           {/* Icons and Text under Heading */}
          
//           {/* Show more button  */}
//           <div className="  absolute bottom-8 w-full text-center ">
//             <button
//               onClick={showMoreBtn}
//               className=" text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
//             >
//               show more
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import arrowIcon from '../assets/icons/arrow.png';
import phoneIcon from '../assets/icons/contact.png';
import mailIcon from '../assets/icons/mail.png';

const Hero = () => {
  const showMoreBtn = () => {
    document
      .getElementById('about-container')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/walkthrough.mp4" // Path to the video in the public directory
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover" // Ensure the video covers the entire section
        type="video/mp4"
      />

      <div className="relative w-full h-full flex flex-col justify-center items-center text-center z-10">
        <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white capitalize mb-8">
          Glory 44 -
          <br /> A NH 44 Touch Layout
        </h1>
        {/* Icons and Text under Heading */}
        
        {/* Show more button */}
        <div className="absolute bottom-8 w-full text-center">
          <button
            onClick={showMoreBtn}
            className="text-blue-900 text-xl capitalize shadow-lg bg-white hover:bg-orange-500 hover:text-white px-4 py-1 rounded-3xl h-14 w-36"
          >
            Show More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
