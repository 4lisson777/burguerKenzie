import api from './services/api';
import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api.get().then((response) => setProductList(response.data));
  }, []);
  return (
    <div className="App">
      <ProductList>
        {productList.map(({ id, name, price, category, img }) => (
          <Product
            key={id}
            name={name}
            price={price}
            category={category}
            img={img}
          />
        ))}
      </ProductList>
    </div>
  );
}

export default App;
