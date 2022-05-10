import './App.css';
import Navber from './Pages/Shared/Navber/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Aboute from './Pages/Aboute/Aboute';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboute' element={<Aboute></Aboute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
