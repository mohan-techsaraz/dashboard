import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LeftSidebar from './Components/LeftSidebar';
import Main from './Components/Main';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
   <body>
   <div class="main-section">
        <LeftSidebar/>
      <div class="main-left">
        <Header/>
        <Outlet/>
      </div>
   </div>

   </body>
   </>
  );
}

export default App;
