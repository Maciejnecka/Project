import React from 'react';
import { connect } from 'react-redux';
import Map from '../Map';
import StyledGame from './Game.styled';

const Game = ({ playerPosition }) => {
  return (
    <StyledGame>
      <div className="game__map">
        <Map playerPosition={playerPosition} />
      </div>
    </StyledGame>
  );
};

const mapStateToProps = (state) => ({
  playerPosition: state.player.playerPosition,
});

export default connect(mapStateToProps)(Game);
