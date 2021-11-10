import "./App.css";
import Navbar from "./Pages/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Pages/LandingHome/Landing";
import CategorySteps from "./Pages/categoryCycle/CategorySteps";
function App() {
  return (
    <Router>
      <Navbar />
      <Landing />
      <CategorySteps />

      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      
      </Switch> */}
    </Router>
  );
}

export default App;
