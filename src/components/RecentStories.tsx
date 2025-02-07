import React from 'react';

const stories = [
  {
    image: "img3.png",
    title: "It's Never Too Late to Learn",
    category: "Home Region",
    author: "Yee-Lin Lai",
    date: "December 17, 2024",
    description: "At a Northwest Arkansas culinary hub, one resident creates a pathway to a fulfilling new career"
  },
  {
    image: "img4.png",
    title: "Brightwater Helps A Gluten-Free Baker Turn a Hobby Into a Successful Small Business",
    category: "Home Region",
    author: "Yee-Lin Lai",
    date: "December 17, 2024"
  },
  {
    image: "img5.png",
    title: "Dispatch from Indonesia: Watching a New Tuna Harvest Strategy Unfold in Real Time",
    category: "Environment",
    author: "Leo Pradela",
    date: "November 7, 2024"
  }
];

const RecentStories = () => {
  return (
    <div className="bg-gray-50 py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-8 md:mb-16">Recent Stories</h2>
        
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {/* Featured Story */}
          <div className="bg-white">
            <div className="group cursor-pointer">
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden h-64 md:h-full">
                  <img
                    src={stories[0].image}
                    alt={stories[0].title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 mb-4">
                    {stories[0].category}
                  </div>
                  <h3 className="text-xl md:text-2xl font-light mb-4 group-hover:text-blue-600 transition">
                    {stories[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {stories[0].description}
                  </p>
                  <p className="text-sm text-gray-500">
                    {stories[0].author} on {stories[0].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Stories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {stories.slice(1).map((story, index) => (
              <div key={index} className="bg-white">
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden h-48 md:h-64">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 mb-4">
                      {story.category}
                    </div>
                    <h3 className="text-lg md:text-xl font-light mb-4 group-hover:text-blue-600 transition line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {story.author} on {story.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-16">
        <div className="bg-emerald-600 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-light mb-4 md:mb-0">STAY CONNECTED</h2>
            <div className="flex flex-col md:flex-row w-full md:w-auto md:flex-1 max-w-xl md:ml-8">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full md:flex-1 bg-emerald-500 text-white placeholder-white px-4 py-3 mb-4 md:mb-0 focus:outline-none"
              />
              <button className="w-full md:w-auto bg-white text-emerald-600 px-8 py-3 font-medium whitespace-nowrap">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentStories;