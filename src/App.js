import { Routes, Route, Navigate, HashRouter} from 'react-router-dom'
import './App.css';
import Padlock from './assets/padlock.png';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <div className='logo'><img src={Padlock}/></div> 
      <HashRouter basename='/'>
        <Routes>
            <Route exact path='/signin' element={<SignIn/>}></Route>
            <Route exact path='/' element={ <Navigate to="/signin"/> }></Route>
            <Route exact path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </HashRouter>
      <footer>Copyright © Your Website 2020.</footer>
    </div>
  );
}

export default App;
