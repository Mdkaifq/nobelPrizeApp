
import React from 'react';

const PrizeList = ({ prizes }) => {
  return (
    <div>
      <h2>Prize Winners</h2>
      <ul>
        {prizes.map((prize) => (
          <li key={prize.year}>
            <strong>{prize.year}</strong> - {prize.category}: {prize.motivation}
            <ul>
              {prize.laureates.map((laureate) => (
                <li key={laureate.id}>
                  {laureate.firstName} {laureate.surname}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrizeList;
