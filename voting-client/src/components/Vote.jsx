import React, { PropTypes, Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class Vote extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  getPair() {
    return this.props.pair || [];
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>

            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> :
              null}
          </button>
        )}
      </div>
    );
  }
}

Vote.propTypes = {

};

export default Vote;
