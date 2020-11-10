import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Pages/Homepage';
import ImageUpload from './Pages/ImageUpload';
import ImageAction from './Pages/ImageAction';

function App() {
  return (
    <div>
       <Router>
         <Switch>
           <Route path="/home">
              <Homepage/>
           </Route>
           <Route path="/imageUpload">
              <ImageUpload/>
           </Route>
           <Route path="/imageAction">
              <ImageAction/>
           </Route>
           <Route exact path="/">
              <Homepage/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
