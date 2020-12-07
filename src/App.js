import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import Register from './component/Register';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

const Routing = () =>{
  return(
    <Switch>
 
    <Route exact path="/" component={Login} />
    <Route path="/signup" component={Register} />

   
    </Switch>

  )
}

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routing />
    </BrowserRouter>
{/* <Switch>
<Route exact path="/" component={Login} />
<Route path="/signup" component={Register} />

</Switch> */}

      {/* <Login />

      <Register /> */}
    </div>
  );
}

export default App;
