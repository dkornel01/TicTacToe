import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import jatekok from "./pages/jatekok";
import TicTacToe from "./pages/TicTacToeApp";
import LightOutApp from "./pages/LightOutApp";
import NoPage from "./pages/NoPage";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<jatekok />} />
          <Route path="TicTacToe" element={<TicTacToe />} />
          <Route path="LightOutApp" element={<LightOutApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
