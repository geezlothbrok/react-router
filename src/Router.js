import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import ServicesDetails from './Pages/ServicesDetails';
import Navbar from './Pages/Navbar';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/" component= {Home} />
        <Route path="/about" component= {About} />
        <Route path="/contact" component= {Contact} />
        <Route exact path="/services" component= {Services} />
        <Route  path="/servicesdetails/:id" component= {ServicesDetails} />
        <Route component= {PageNotFound} />

        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
