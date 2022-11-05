import { Routes, Route} from 'react-router-dom'
import './App.css';
import Padlock from './assets/padlock.png';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <div className='logo'><img src={Padlock}/></div> 
      <Routes>
          <Route exact path='*' element={<SignIn/>} />
          <Route exact path='/signup' element={<SignUp/>}/>
      </Routes>
      <footer>Copyright © Your Website 2020.</footer>
    </div>
  );
}

export default App;
