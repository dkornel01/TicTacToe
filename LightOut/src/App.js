
import { useState } from 'react';
import './App.css';
import Jatekter from './komponensek/jatekter';
import LampaModell from './komponensek/LampaModell';

const LAMPAMODELL=new LampaModell()
function App() {
  const [list,setList]=useState(LAMPAMODELL.GetLista());
  function katt(index){
    LAMPAMODELL.SetAllapot(index)
    setList(list)
    console.log(list);
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>LightOut</h1>
      </header>
      <article>
        <Jatekter list={LAMPAMODELL.GetLista()} katt={katt} />
      </article>
      <footer>Dobrocsi Kornél</footer>
    </div>
  );
}

export default App;
