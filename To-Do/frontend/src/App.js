
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"; 
import AddSchedule from './pages/AddSchedule/AddSchedule';
import DisplayRequest from './pages/DisplaySchedule/DisplaySchedule';
import UpdateRequest from './pages/UpdateSchedule/UpdateSchedule';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/addSchedule' element={<AddSchedule/>}/>
      <Route path='/scheduledisplay' element={<DisplayRequest/>}/>
      <Route path='/update/:id' element={<UpdateRequest/>}/>
    </Routes>
    </Router>
  );
  
}

export default App;
