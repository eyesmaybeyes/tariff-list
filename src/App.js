import { Card } from './components/Card.jsx';
import data from "./tariffs.json";

function App() {
  return (
    <>
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default App;
