
import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
{/*import logo from './logo.svg';*/}
{/**/}

class App extends React.Component {
  constructor(){
    super();
    this.state={
      postdata:dummyData,
      inputText:'',

    }
  }



handleChanges = (typing) =>{
  console.log(typing.target);
  this.setState({
    inputText: typing.target.value
  })
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
        <SearchBar/>


        {this.state.postdata.map(object=>
          (<PostContainer
            stats ={object}
            it={this.state.inputText}
            typingChangesHandler={this.handleChanges}
            />))}
        </header>
        {/*
          <form onSubmit={this.addNewComment}>
          <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
          />
          </form>*/}

      </div>
    );
  }
}

export default App;
