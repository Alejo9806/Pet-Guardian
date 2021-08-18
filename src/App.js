import './App.css';
import SignIn from './components/login/sign-in'
import SignUp from './components/login/sign-up';
import NavBar from './components/navigation/nav-bar';
import Footer from './components/navigation/footer';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path='/sign-in' component={SignIn}/>
            <Route exact path='/sign-up' component={SignUp} />
            <Redirect to='/sign-in'/>
          </Switch>
          <Footer/>
        </BrowserRouter>   
    </div>
  );
}

export default App;
