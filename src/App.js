import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
// import { Link } from 'react-router-dom';
import Cart from './components/Cart/Cart'; // Импортируем компонент корзины
import Rabbits from './components/Rabbits/Rabbits'; // импортируем компонент Rabbits

function App() {
  return (
    <Router>
      
      <Header />
      <Routes>
      <Route exact path="/" component={Home} /> 
      <Route path="/rabbits" component={Rabbits} /> // указываем маршрут для Rabbits
        <Route path="/product/:id" component={Product} />
        <Route path="/cart" component={Cart} />
      
      </Routes>
      <Footer /> 
   
    </Router>
  );
}

export default App;

