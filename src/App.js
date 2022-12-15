import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Introduction from './pages/introduction';
import Product from './pages/product';
import Note from './pages/note';
import Contact from './pages/contact';
import Career from './pages/career';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/gioi-thieu" element={<Introduction />} />
          <Route path="/collections/all" element={<Product />} />
          <Route path="/blogs/tat-ca-bai-viet" element={<Note />} />
          <Route path="/pages/lien-he" element={<Contact />} />
          <Route path="/pages/osifood-tuyen-dung" element={<Career />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
