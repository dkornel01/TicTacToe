import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Játékok</Link>
          </li>
          <li>
            <Link to="/TicTacToe">Tic Tac Toe</Link>
          </li>
          <li>
            <Link to="/LightOutApp">Light On</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
