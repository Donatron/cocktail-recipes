import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss';

import Header from './components/header';
import CocktailList from './components/CocktailList';
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Header />
      <CocktailList />
      <Footer />
    </div>
  );
}

export default App;
