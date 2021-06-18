import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import { useState } from 'react';
import MyTimezones from './pages/MyTimezones';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';


function App() {
  const [timezones, setTimezones] = useState([]);



  return (
    <Router>
      <Container fluid className="App">
        <Navbar>
          <Navbar.Brand href="/">World Clock</Navbar.Brand>
          <Nav.Link><Link style={{color: 'white'}} to="/">Home</Link></Nav.Link>
          <Nav.Link><Link style={{color: 'white'}} to="timezones">My Timezones</Link></Nav.Link>
        </Navbar>
        <Switch>
          <Route path='/' exact>
            <Home setTimezones={setTimezones} timezones={timezones} />
          </Route>
          <Route path='/timezones' exact>
            <MyTimezones setTimezones={setTimezones} timezones={timezones} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
