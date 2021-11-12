import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useVersionQuery } from './generated/graphql';

function App() {
  const {data} = useVersionQuery()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <br/>

        <p className="bg-blue-400 p-2 rounded-md">{data?.version}</p>
      </header>
    </div>
  );
}

export default App;
