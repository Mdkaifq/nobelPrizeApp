
import React, { useEffect, useState } from 'react';
import { fetchPrizes } from './api';
import PrizeList from './PrizeList';

const App = () => {
  const [prizes, setPrizes] = useState([]);
  const [filteredPrizes, setFilteredPrizes] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const prizeData = await fetchPrizes();
      setPrizes(prizeData);
      setFilteredPrizes(prizeData);
    };

    fetchData();
  }, []);

  const handleFilter = () => {
    let filtered = prizes;

    if (selectedYear) {
      filtered = filtered.filter((prize) => prize.year === parseInt(selectedYear));
    }

    if (selectedCategory) {
      filtered = filtered.filter((prize) => prize.category === selectedCategory);
    }

    setFilteredPrizes(filtered);
  };

  return (
    <div>
      <h1>Nobel Prize Winners</h1>
      <div>
        <label>
          Filter by Year:
          <input
            type="number"
            min="1900"
            max="2018"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          />
        </label>
        <label>
          Filter by Category:
          <input
            type="text"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>Filter</button>
      </div>
      <PrizeList prizes={filteredPrizes} />
    </div>
  );
};

export default App;
