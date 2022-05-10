import './App.css';
import Navber from './Pages/Shared/Navber';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Aboute from './Pages/Aboute/Aboute';
import Login from './Pages/Login/Login';
import Appoientment from './Pages/Appoientment/Appoientment';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboute' element={<Aboute></Aboute>}></Route>
        <Route path='/appoeinment' element={<Appoientment></Appoientment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
