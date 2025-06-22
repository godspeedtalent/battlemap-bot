import React from 'react';

function MapGrid() {
  // Basic placeholder grid
  const size = 10;
  const tiles = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      tiles.push(
        <div key={`${x}-${y}`} className="w-8 h-8 border border-gray-600"></div>
      );
    }
  }

  return <div className="grid grid-cols-10">{tiles}</div>;
}

export default MapGrid;
