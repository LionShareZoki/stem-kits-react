import React, { useState } from 'react';
import SEED_DATA from './constants/seed-data';
import Card from './components/card';
import Button from './components/button';
import Spinner from './components/spinner/Spinner';
import getKits from './functions/get-kits';

function App() {
  const [kits, setKits] = useState(SEED_DATA);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      getKits(setKits);
    }, 1000);
  };

  return (
    <div>
      <div className="header">
        <h1>Learn electronics & coding</h1>
        <h1>with our best-selling DIY STEM kits:</h1>
      </div>
      <div className="cards">
        {kits.map((kit) => (
          <Card
            image={kit.image}
            title={kit.title}
            description={kit.description}
            price={kit.price}
            discount={kit.discount}
            age={kit.ages}
            primaryColor={kit.color}
            secondaryColor="#ffffff"
          />
        ))}

      </div>
      <div className="footer">
        <Button text="Show more" backgroundColor="#e3384d" foregroundColor="white" onClick={handleClick} />
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default App;
