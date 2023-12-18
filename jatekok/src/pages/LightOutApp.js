import { useState } from 'react';
import './LightOut/src/App.css';
import Jatekter from './LightOut/src/komponensek/jatekter';
import LampaModell from './LightOut/src/komponensek/LampaModell';
export default function LightOutApp(){

    const LAMPAMODELL=new LampaModell()
    const [list,setList]=useState(LAMPAMODELL.GetLista());
    function katt(index){
    LAMPAMODELL.SetAllapot(index)
    setList(list)
    console.log(list);
  }
    return(
            <div className="App">
              <header className="App-header">
              <h1>LightOut</h1>
              </header>
              <article>
                <Jatekter list={LAMPAMODELL.GetLista()} katt={katt} />
              </article>
              <footer>Dobrocsi Kornél</footer>
            </div>
    )
}