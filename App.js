import React, { useState } from 'react';
import CardSelector from './components/CardSelector';
import PlatformSelector from './components/PlatformSelector';
import SpendSlider from './components/SpendSlider';
import Results from './components/Results';
import cardData from './data/cards';

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [spendAmount, setSpendAmount] = useState(10000);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-xl font-bold text-center mb-4">Credit Card Rewards Comparison</h1>
      <PlatformSelector selected={selectedPlatforms} onChange={setSelectedPlatforms} />
      <CardSelector selected={selectedCard} onChange={setSelectedCard} cards={cardData} />
      <SpendSlider value={spendAmount} onChange={setSpendAmount} />
      <Results
        card={selectedCard}
        platforms={selectedPlatforms}
        amount={spendAmount}
        cards={cardData}
      />
    </div>
  );
};

export default App;