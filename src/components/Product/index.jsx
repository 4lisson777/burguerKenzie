import { Item } from './styles';
import { useEffect } from 'react';

const Product = ({ product, cart, setCart, addCart, setAddCart }) => {
  const { name, category, price, img } = product;

  useEffect(() => {
    setCart(() => {
      return addCart.reduce((result, currentProduct) => {
        if (
          result.findIndex((item) => item.name === currentProduct.name) === -1
        ) {
          result.push({
            id: currentProduct.id,
            name: currentProduct.name,
            category: currentProduct.category,
            price: currentProduct.price,
            img: currentProduct.img,
            quantity: 1,
          });
        } else {
          result[result.findIndex((item) => item.name === currentProduct.name)]
            .quantity++;
        }
        return result;
      }, []);
    });
  }, [addCart]);

  const handleAddToCart = (product) => {
    setAddCart([...addCart, product]);
  };

  return (
    <Item>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h1>{name}</h1>
        <small>{category}</small>
        <span>`R$ {price}.00`</span>
        <button onClick={() => handleAddToCart(product)}>Adicionar</button>
      </div>
    </Item>
  );
};

export default Product;
