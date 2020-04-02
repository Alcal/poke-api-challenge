import React from 'react';
import './App.css';
import {StateProvider} from './state/state';
import {Pokedex} from './components/Pokedex.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StateProvider>
          <Pokedex />
        </StateProvider>
      </header>
    </div>
  );
}

export default App;
