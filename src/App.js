import api from './services/api';
import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState(productList);
  const [cart, setCart] = useState([]);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    api.get().then((response) => {
      setProductList(response.data);
      setFilteredList(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Header productList={productList} setFilteredList={setFilteredList} />
      <div>
        <ProductList>
          {filteredList.map((product) => (
            <Product
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              addCart={addCart}
              setAddCart={setAddCart}
            />
          ))}
        </ProductList>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
}

export default App;
