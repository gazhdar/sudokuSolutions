import React, { Component } from 'react';
import spinner from './spinner.gif';
import './App.css';

class App extends Component {
  state = {
    response: []
  };

  componentDidMount() {
    this.loadPage();

  }

  loadPage = async () => {
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    var _this=this;
    const response = await fetch('/sudoku/board');
    const solution = await response.json();

    var table = `<table>`;
    // Loop through each row
    for (var i = 0; i < 9; i++) {
      table += "<tr>";
      //Loop through columns
      for (var j = 0; j < 9; j++) {
        table += "<td>" + solution[(i*9+j)] + "</td>"
      }
      table += "</tr>"
    }
    table += "</table>"

    document.getElementById('sudokuTable').innerHTML = table;
    document.getElementById('App').classList.remove('loading');

    document.getElementById('reloadButton').onclick = function(){
      document.getElementById('App').classList.add('loading');
      _this.loadPage();
    }
    document.getElementById('toggleMood').onchange = function(){
      document.getElementById('App').classList.toggle("dark");
    }
    if (response.status !== 200) throw Error(solution.message);

    return solution;
  };

  render() {
    return (
      <div className="App loading" id="App">
        <div className="loader"><img alt="" src={spinner}></img></div>
        <header className="App-header">
          <h1 className="App-title"><span>SUDOKU</span> SOLUTIONS</h1>
        </header>
        <div id="sudokuTable"></div>
        <div id="buttonContainer">
          <button id="reloadButton" type="button">Reload Board</button>
          <label className="switch">
            <input id="toggleMood" type="checkbox"></input>
            <span className="slider round"></span>
          </label>
          <p>Toggle Mood</p>
        </div>
      </div>
    );
  }
}

export default App;
