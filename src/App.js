import './App.css';
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import PageTitle from './components/pageTitle';
import CocktailList from './components/CocktailList';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Header />
      <PageTitle />
      <CocktailList />
      <Footer />
    </div>
  );
}

export default App;
