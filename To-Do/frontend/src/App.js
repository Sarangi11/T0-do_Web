
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Home from './pages/HomePage/Home';
import WeekTask from './pages/WeekTask/WeekTask';
import ShowTask from './pages/ShowTask/ShowTask';
import CompleteTask from './pages/CompleteTask/CompleteTask';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import NormalTask from './pages/NormalTask/NormalTask';
import ViewTask from './pages/ViewTask/ViewTask';



function App() {
  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/WeekTask' element={<WeekTask/>}/>
      <Route path='/update' element={<ShowTask/>}/>
      <Route path='/complete' element={<CompleteTask/>}/>
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/tasks" element={<NormalTask/>} />
      <Route path="/taskView" element={<ViewTask/>} />
      
    </Routes>
    </Router>
  );
  
}

export default App;
