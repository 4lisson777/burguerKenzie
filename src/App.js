import api from './services/api';
import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Header from './components/Header';

function App() {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState(productList);

  useEffect(() => {
    api.get().then((response) => {
      setProductList(response.data);
      setFilteredList(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Header productList={productList} setFilteredList={setFilteredList} />
      <ProductList>
        {filteredList.map(({ id, name, price, category, img }) => (
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
