import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'


class App extends React.Component {
  constructor(){
    super();
    this.state={
      postdata:dummyData,
      inputText:''
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
        {this.state.postdata.map(object=>(<PostContainer stats ={object} />))}

        <form onSubmit={this.addNewComment}>
        <input
        type="text"

        value={this.state.inputText}
        onChange={this.handleChanges}
        />
        </form>

        </header>
      </div>
    );
  }
}

export default App;
