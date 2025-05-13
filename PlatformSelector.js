import React from 'react';

const platforms = ['Amazon', 'Flipkart', 'Zomato', 'Swiggy', 'Zepto', 'Blinkit', '1mg', 'Ola', 'Uber', 'Airport', 'International Travel'];

const PlatformSelector = ({ selected, onChange }) => {
  const togglePlatform = (platform) => {
    const newSelected = selected.includes(platform)
      ? selected.filter(p => p !== platform)
      : [...selected, platform];
    onChange(newSelected);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Where are you spending?</label>
      <div className="flex flex-wrap gap-2">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={() => togglePlatform(platform)}
            className={`px-3 py-1 rounded-full border ${
              selected.includes(platform) ? 'bg-blue-600 text-white' : 'bg-white'
            }`}
          >
            {platform}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformSelector;