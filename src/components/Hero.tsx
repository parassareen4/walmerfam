import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden" style={{height:"50vh"}}>
      <div className="absolute inset-0">
        <img
          src="img2.png"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl font-light text-white mb-6">
            Creating Pathways to Promising Careers
          </h1>
          <p className="text-base sm:text-xl text-white mb-8">
            The Walton Family Foundation is committed to supporting career pathways programs built for the needs of Northwest Arkansas. We believe deep collaboration is key to building and sustaining a thriving workforce in the region.
          </p>
          <button className="bg-white text-gray-900 px-6 sm:px-8 py-2 sm:py-3 rounded hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;