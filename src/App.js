import './App.css';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Icons from './components/Icons';
import Product from './components/Product';
import Newsletter from './components/Newsletter';
import Category from './components/Category';
import Deal from './components/Deal';
import Review from './components/Review';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <NavMobile />

      <LoginForm />

      <Home />

      <Icons />

      <Product />

      <Newsletter />

      <Category />

      <Deal />

      <Review />

      <Blogs />

      <Footer />
    </div>
  );
}

export default App;
