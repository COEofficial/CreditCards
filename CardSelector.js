import React from 'react';

const CardSelector = ({ selected, onChange, cards }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Select Your Credit Card</label>
      <select
        className="w-full border rounded p-2"
        value={selected || ''}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">-- Choose a card --</option>
        {cards.map((card, index) => (
          <option key={index} value={card.name}>
            {card.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CardSelector;