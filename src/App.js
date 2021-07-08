import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import SearchPage from './SearchPage';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/* wrap the app inside the router */}
      <Router>
        <Header />

        <Switch>

          {/*  if "/" then render home page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/*  if "/search" then render search page */}
          <Route exact path="/search">
            <SearchPage />
          </Route>
          
        </Switch>

        <Footer />
      </Router>


      {/* Home */}
        {/* Header */}
      
        {/* Banner */}
          {/* Search */}

        {/* Cards */}

        {/* Footer */}
    </div>
  );
}

export default App;
