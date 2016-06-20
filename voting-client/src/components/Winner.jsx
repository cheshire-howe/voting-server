import React, { PropTypes, Component } from 'react';

class Winner extends Component {

  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
}

Winner.propTypes = {

};

export default Winner;
