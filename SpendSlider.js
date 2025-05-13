import React from 'react';

const SpendSlider = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">How much are you spending? (₹{value})</label>
      <input
        type="range"
        min="1000"
        max="100000"
        step="1000"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
};

export default SpendSlider;