import { Card } from './components/Card.jsx';
import { useState } from 'react'
import data from "./tariffs.json";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectCard = (selectedItem) => {
    if (selectedCard === selectedItem) {
      setSelectedCard(null);
    } else {
      setSelectedCard(selectedItem);
    }
  };

  return (
    <div className="card-container">
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          isSelected={selectedCard === item}
          onSelect={handleSelectCard}
        />
      ))}
    </div>
  );
}
export default App;
