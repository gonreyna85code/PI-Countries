import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from './routes/home.jsx'
import detail from './routes/detail.jsx'

function App() {
  return (
    <div>
      <Router>
      
        <Switch>        
          <Route exact path={"/home"} component={home}></Route>          
        </Switch>
        <Switch>        
          <Route exact path={"/detail/:cca3"} component={detail}></Route>          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
