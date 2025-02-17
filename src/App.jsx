import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ImageScroller from './components/screen/desktop/ImageScroller';
import './App.css';
import HomePage from './components/pages/HomePage';
import Headerds from './components/Headerds';
import Footer from './components/Footer';
import ProductListpage from './components/pages/ProductListpage';
import ImageDisplay from './components/screen/desktop/ImageDisplay';
import AboutPage from './components/pages/AboutPage';
import Hed from './components/screen/desktop/Hed';
import AccountPage from'./components/pages/AccountPage';
import FavrtPage from'./components/pages/FavrtPage';
import ProductPage from './components/pages/ProductPage';
import LoginPage from './components/pages/LoginPage';
import MobileAboutDynamicPage from './components/pages/MobileAboutDynamic';
import DeliveryOption from './components/screen/desktop/DeliveryOption';
import PaymentOption from './components/screen/desktop/PaymentOption';
import PrivacyPolicy from './components/screen/desktop/PrivacyPolicy';
import ReturnsRefundPolicy from './components/screen/desktop/ReturnsRefundPolicy';
import TermsAndConditions from './components/screen/desktop/TermsAndConditions';
import AboutUs from './components/screen/desktop/AboutUs';
import ContactUs from './components/screen/desktop/ContactUs';
import FAQ from './components/screen/desktop/FAQ';
import Adminpage from './components/adminpages/Adminpage';
import AdminLoginPage from './components/adminpages/AdminLoginPage';
import AdminRegPage from './components/adminpages/AdminRegPage';
import VerifyJWT from './components/VerifyJWT';

function App() {
  const images = [
    'https://i.postimg.cc/7Z2Kvkpc/f31c69fa52c67fef74e0646531818323.jpg',
  'https://i.postimg.cc/Lsc197Hg/b316df6f2ab68e16f8195ff01ccf9b1b.jpg',
  'https://indiaspopup.com/cdn/shop/products/Deep-Red-Bridal-Lehenga-Choli-Set-1_grande.jpg?v=1665673526',
  'https://media.samyakk.com/pub/media/catalog/product/p/i/pink-stone-embroidered-exclusive-bridal-net-lehenga-with-leaf-neck-gc4746-b.jpg',
  'https://i.postimg.cc/SRYMXy7b/6226738299368750209-zoom.jpg',
  ];

  function Layout() {
    const location = useLocation();

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
        }}
      >
        <div
          className="divi"
          style={{
            width: '100%',
            background:
              location.pathname === '/'
                ? 'radial-gradient(100% 100% at 50% 50%, #C4B5CA 0%, #E5D2EB 22%, #DCB8E8 75%, #C1B0C7 100%)'
                : 'transparent',
            
            transition: 'background 0.3s ease, border-bottom 0.3s ease',
            margin:'0px',
            padding:'10px',
          }}
        ><header>
          <Headerds />
         
          </header>
          {/* Show ImageScroller only on the home page */}
          {location.pathname === '/' && <ImageDisplay images={images} />}
          <VerifyJWT /> 
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListpage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/Favorite" element={<FavrtPage />} />
          <Route path="/Details" element={<ProductPage />} />
          <Route path="/user" element={<LoginPage />} />
          <Route path="/Information/*" element={<MobileAboutDynamicPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/delivery-option" element={<DeliveryOption />} />
        <Route path="/payment-option" element={<PaymentOption />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/returns-refund-policy" element={<ReturnsRefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-register" element={<AdminRegPage />} />
        <Route path="/admin/dashboard" element={<Adminpage />} />
        
       
          
        </Routes>
     
        <div
          style={{
            width: '100%',
            background: '#431934',
          }}
        >
          
          <footer>
          <Footer />
          </footer>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
