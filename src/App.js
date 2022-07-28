
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Parent from './Components/Fourthtask/Parent';
import Taskthree from './Components/Thirdtask/Taskthree';
import Tasktwo from './Components/Secondtask/Tasktwo';
import Taskone from './Components/Firsttask/Taskone';
import Home from './Components/Home'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='taskone' element={ <Taskone/>}/>
        <Route path='tasktwo' element={ <Tasktwo/>}/>
        <Route path='taskthree' element={ <Taskthree/>}/>
        <Route path='taskfour' element={ <Parent/>}/>
      </Routes>
     <Footer />

    </div>
  );
}

export default App;
