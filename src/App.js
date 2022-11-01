import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Header from './header/header';
import Product from './products/product'
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">
    
      <Navbar />
      <Header />
      <Product />
      <Footer />
    
      
    </div>
  );
}

export default App;
