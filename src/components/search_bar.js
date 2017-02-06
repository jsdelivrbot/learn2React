import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <input
          className="form-control"
          value={ this.state.term }
          onChange={ event => this.setState({ term: event.target.value }) } />
      </div>
    );
  }

};

export default SearchBar;
