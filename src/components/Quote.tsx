import React from 'react';

const Quote = () => {
  return (
    <section className="bg-[#002f6c] text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="text-3xl font-light mb-6">
          "It's not what you gather in life, but what you scatter in life,
          that tells the kind of life you have lived."
        </blockquote>
        <p className="text-lg">Helen Walton's favorite saying</p>
      </div>
    </section>
  );
};

export default Quote;