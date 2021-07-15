import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ScrollToTop } from 'react-router-scroll-to-top';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Page404 from './Views/Page404';
import Home from './Views/Home';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Forum from './Views/Forum';
import Login from './Views/Login';
import About from './Views/About';


function App() {
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route path="/articles/:articleID">
            <Article />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
