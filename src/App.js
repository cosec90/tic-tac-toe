import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './component/Welcome'
import Counter from './component/Counter'
import EventBinder from './component/EventBinder';
import ParentComponent from './component/ParentComponent';
import ConditionalRendering from './component/ConditionalRendering';
import ListRendering from './component/ListRendering';
import FragmentDemo from './component/FragmentDemo';
import Tables from './component/Tables';
import Square from './component/tic-tac-toe/Square';
import Game from './component/tic-tac-toe/Game';
function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <EventBinder /> */}
      {/* <ParentComponent /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      {/* <FragmentDemo /> */}
      {/* <Tables/> */}
      <Game />
    </div>
  );
}

export default App;
