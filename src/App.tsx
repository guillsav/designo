import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import {
  About,
  AppDesign,
  GraphicDesign,
  Homepage,
  WebDesign,
  Locations,
  Contact
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/web-design" component={WebDesign} />
        <Route exact path="/app-design" component={AppDesign} />
        <Route exact path="/graphic-design" component={GraphicDesign} />
        <Route exact path="/about" component={About} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
