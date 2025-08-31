import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import Phonecase from './pages/Phonecase';
import Home from './pages/Home';
import WallArt from './pages/WallArt';
import WallArtproductpage from './pages/WallArtproductpage';
import Customise from './pages/Customise';
import CardCongrats from './pages/CardCongrats';
import Login from './pages/Login';
import ContactUs from './pages/ContactUs';
// import other pages if needed
// import Home from './pages/Home';
// import About from './pages/About';

function App() {
  return (
    <Router>
      <div className='bg-black z-50 relative overflow-hidden'>

        <Header />
        <img className='absolute top-0 right-0 h-[500px] w-60 z-[-9999]' src="/rt-fl.png" alt="" />
        <img className='absolute top-0 left-0 h-[500px] w-60 z-[-999]' src="/lt-fl.png" alt="" />

        <img className='absolute top-1/2 right-0 h-[500px] w-60 z-[-1]' src="/rm-fl.png" alt="" />
        <img className='absolute top-1/2 left-0 h-[500px] w-60 z-[-1]' src="/lm-fl.png" alt="" />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/phonecase" element={<Phonecase/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/wallart" element={<WallArt/>} />
          <Route path="/wallartproduct" element={<WallArtproductpage/>} />
          <Route path="/customise" element={<Customise/>} />
          <Route path="/congratulation" element={<CardCongrats/>} />  
          <Route path="/login" element={<Login/>} />     
          <Route path="/contact-us" element={<ContactUs/>} />     
          {/* Add other routes as needed */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
