import './App.css';
import Nav from './components/screens/includes/Nav';
import Main from './components/screens/Main';
import Place from './components/screens/Place';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <>
        <section className='wrapper'>
              <Nav />
              <Switch>
                  <Route path='/Traveller-Guide' exact component={Main} />
                  <Route path="/Traveller-Guide/place/:id" component={Place} />
              </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;
