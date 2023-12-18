import { useState } from 'react';
import './tictactoe/src/App.css';
import Jatekter from './tictactoe/src/komponensek/jatekter';
import TModell from './tictactoe/src/komponensek/TModell';

const tmodell=new TModell()
export default function TicTacToe(){
          const [list,setList]=useState(tmodell.getList());
          function katt(index){
            tmodell.setAllapot()
            setList(tmodell.getList())
            console.log(list)
          }
          
    return(
            <div className="App">
              <header className="App-header">
              <h1>tictactoe</h1>
              </header>
              <article>
                <Jatekter list={list} katt={katt} />
              </article>
              <footer>Dobrocsi Kornél</footer>
            </div>
    )
}