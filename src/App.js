import "./App.css";
import Navbar from "./Pages/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />

      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      
      </Switch> */}
    </Router>
  );
}

export default App;
