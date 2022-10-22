import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { RequireAuth } from './contexts/RequireAuth';
import logo from './assets/images/logo.png'
import { Create } from './pages/create';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Edit } from './pages/edit';
import { Category } from './pages/category';


function App() {

  return (
    <div className="containerPage">
      <div className='logo'>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </div>
      <div className="main">
        <Routes>
          <Route path='/' element={<RequireAuth><Home/></RequireAuth>} />
          <Route path='/create/task' element={<RequireAuth><Create/></RequireAuth>} />
          <Route path='/create/category' element={<RequireAuth><Category/></RequireAuth>} />
          <Route path='/editar/:id' element={<RequireAuth><Edit/></RequireAuth>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
