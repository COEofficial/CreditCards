import React from 'react';

const Results = ({ card, platforms, amount, cards }) => {
  const selectedCard = cards.find(c => c.name === card);
  if (!selectedCard) return null;

  const rewardRate = selectedCard.rewards?.defaultRate || 1;
  const pointValue = selectedCard.rewards?.pointValue || 0.25;

  const points = Math.floor(amount / 100) * rewardRate;
  const valueInRupees = points * pointValue;

  return (
    <div className="p-4 bg-white rounded shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Your Rewards Summary</h2>
      <p><strong>Card:</strong> {selectedCard.name}</p>
      <p><strong>Platforms:</strong> {platforms.join(', ')}</p>
      <p><strong>Points Earned:</strong> {points}</p>
      <p><strong>Value in ₹:</strong> ₹{valueInRupees.toFixed(2)}</p>
    </div>
  );
};

export default Results;