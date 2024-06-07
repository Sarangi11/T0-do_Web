
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import Home from './pages/HomePage/Home';
import WeekTask from './pages/WeekTask/WeekTask';
import ShowTask from './pages/ShowTask/ShowTask';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/WeekTask' element={<WeekTask/>}/>
      <Route path='/update' element={<ShowTask/>}/>
    </Routes>
    </Router>
  );
  
}

export default App;
