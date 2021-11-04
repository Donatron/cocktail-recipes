import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

import Header from './components/header';
import Home from './components/Home';
import CocktailDetails from './components/CocktailDetails';
import CocktailSearchResults from './components/CocktailSearchResults';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/search-results" component={CocktailSearchResults} />
            <Route path="/details/:id" component={CocktailDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
