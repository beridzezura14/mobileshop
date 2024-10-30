import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './components/page/Home';
import Shop from './components/page/Shop';
import ProductDetails from './components/page/ProductDetails';
import './main.scss'
import './components/style.scss'
import { useState, useEffect } from 'react';
import { products } from './Sorce';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const clearList = () => {
    setSearchTerm(''); 
  }

  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // სიმულაცია საიტის ჩატვირთვისთვის (მაგალითად, მონაცემების API-დან მოპოვება)
    setTimeout(() => {
      setLoading(false); // როცა საიტი ჩაიტვირთება, loading იქნება false
    }, 1000); // 1 წამი, აქ შეგიძლია დააყენო შენი რეალური დატვირთვის დრო
  }, []);

  if (loading) {
    return <h2 className="loading">Loading <span style={{color: "#DB4444"}}> ...</span></h2>;
  }
  return (
    <>
      <Router basename="/">
        <Header 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} 
          filteredProducts={filteredProducts} 
          clearList={clearList}
        />
        <Routes>
          <Route>

          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/:id' element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
