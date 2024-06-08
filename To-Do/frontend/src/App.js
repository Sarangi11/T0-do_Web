
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Home from './pages/HomePage/Home';
import WeekTask from './pages/WeekTask/WeekTask';
import ShowTask from './pages/ShowTask/ShowTask';
import CompleteTask from './pages/CompleteTask/CompleteTask';
import NavigationBar from './Components/NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
    <NavigationBar />
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/WeekTask' element={<WeekTask/>}/>
      <Route path='/update' element={<ShowTask/>}/>
      <Route path='/complete' element={<CompleteTask/>}/>
    </Routes>
    </Router>
  );
  
}

export default App;
