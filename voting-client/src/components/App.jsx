import React, { PropTypes, Component } from 'react';

class App extends Component {

  render() {
    return (
      this.props.children
    );
  }
}

App.propTypes = {

};

export default App;
