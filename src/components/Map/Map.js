import React from 'react';
import { StyledMap } from './Map.styled';

const mapSize = 25;
const Map = ({ playerPosition }) => {
  const renderMap = () => {
    let map = [];
    for (let y = 0; y < mapSize; y++) {
      let row = [];
      for (let x = 0; x < mapSize; x++) {
        const isPlayerPosition =
          x === playerPosition.x && y === playerPosition.y;
        const cellContent = isPlayerPosition ? 'P' : '';
        row.push(
          <div
            className={`map__cell ${
              isPlayerPosition ? 'map__cell--player' : ''
            }`}
            key={`cell-${x}-${y}`}
          >
            {cellContent}
          </div>
        );
      }
      map.push(
        <div className="map__row" key={`row-${y}`}>
          {row}
        </div>
      );
    }
    return map;
  };

  return <StyledMap>{renderMap()}</StyledMap>;
};

export default Map;
