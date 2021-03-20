import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Tools from "./views/Tools";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/tools' exact render={() => <Tools />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
