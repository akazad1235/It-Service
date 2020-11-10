import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import Admin from './Pages/Admin';
import ImageAction from './Pages/ImageAction';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route path="/home">
              <Homepage/>
           </Route>
           <Route path="/admin">
              <Admin/>
           </Route>
           <Route path="/imageAction">
              <ImageAction/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
