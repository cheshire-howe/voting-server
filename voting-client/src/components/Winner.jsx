import React, { PropTypes, Component } from 'react';

class Winner extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    shallowCompare(this, nextProps, nextState);
  }

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
