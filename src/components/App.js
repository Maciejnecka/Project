import React from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import { movePlayer } from './actions/actions';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    this.props.movePlayer(event.key);
  };

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

const mapDispatchToProps = {
  movePlayer,
};

export default connect(null, mapDispatchToProps)(App);
