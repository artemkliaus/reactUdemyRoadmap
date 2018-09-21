import React, { Component } from 'react';
import './App.css';

//Components
import CardWrapper from './components/cardWrapper/CardWrapper';
import SearchPanel from './components/searchPanel/SearchPanel';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: null
    };
  }

  inputHandler(e) {
      let value = e.target.value;
      this.setState({
        searchText: value
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchPanel inputHandler={this.inputHandler.bind(this)}/>
        </header>
        <div className="App-intro">
          <CardWrapper text={this.state.searchText}/>
        </div>
      </div>
    );
  }
}

export default App;
