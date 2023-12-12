
import { useState } from 'react';
import './App.css';
import Jatekter from './komponensek/jatekter';
import TModell from './komponensek/TModell';

const tmodell=new TModell()
function App() {
  const [list,setList]=useState(tmodell.getList());
  function katt(index){
    tmodell.setAllapot()
    setList(tmodell.getList())
    console.log(list)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>tictactoe</h1>
      </header>
      <article>
        <Jatekter list={list} katt={katt} />
      </article>
      <footer>Dobrocsi Kornél</footer>
    </div>
  );
}

export default App;
