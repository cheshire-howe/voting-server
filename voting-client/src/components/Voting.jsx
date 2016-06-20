import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import Vote from './Vote';
import Winner from './Winner';

class Voting extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }
  render() {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner} /> :
          <Vote {...this.props} />}
      </div>
    );
  }
}

Voting.propTypes = {
  
};

export default Voting;

