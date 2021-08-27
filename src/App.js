import './App.css';
import Home from './components/home'
import SignIn from './components/login/sign-in'
import SignUp from './components/manager/registration/sign-up';
import NavBar from './components/layouts/nav-bar';
import Footer from './components/layouts/footer';
import {Switch,Route,Redirect,BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import petsAssigned from './components/veterinarian/petsAssigned';
import employeeManagement from './components/manager/employeeManagement';
import PrivateRoute from './components/PrivateRoute';


const store = ConfigureStore();

function App() {
  
  return (
    <div className="App">
        <Provider store={store}>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path='/sign-in' component={SignIn}/>
              <Route exact path='/home' component={Home} />
              <PrivateRoute exact path='/sign-up' component={SignUp} rol={"ADMIN"}/>
              <PrivateRoute exact path="/pets-assigned" component={petsAssigned} rol={"USER"}/>
              <PrivateRoute exact path="/employee-management" component={employeeManagement} rol={"ADMIN"}/>
              <Redirect to='/home'/>
            </Switch>
            <Footer/>
          </BrowserRouter>  
        </Provider> 
    </div>
  );
}


export default App;
