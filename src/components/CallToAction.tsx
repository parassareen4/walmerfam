import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80"
            alt="Our Mission"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="text-white text-2xl font-light mb-4">
                Our Mission,<br />Vision & Values
              </h3>
              <button className="bg-white text-gray-900 px-6 py-2 text-sm hover:bg-gray-100 transition">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80"
            alt="Learning and Leading"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="text-white text-2xl font-light mb-4">
                Learning and Leading Together: The<br />Next Five Years
              </h3>
              <button className="bg-white text-gray-900 px-6 py-2 text-sm hover:bg-gray-100 transition">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
            alt="Careers"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center p-6">
            <div>
              <h3 className="text-white text-2xl font-light mb-4">Careers</h3>
              <button className="bg-white text-gray-900 px-6 py-2 text-sm hover:bg-gray-100 transition">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;