
import News from "./components/News";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <News key="general" pageSize={6} country="in" category="general" />
          </Route>
          <Route exact path="/buisness">
            <News key="buisness" pageSize={6} country="in" category="buisness" />
          </Route>
          <Route exact path="/technology">
            <News key="technology" pageSize={6} country="in" category="technology" />
          </Route>
          <Route exact path="/entertainment">
            <News key="entertainment" pageSize={6} country="in" category="entertainment" />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={6} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={6} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={6} country="in" category="sports" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
