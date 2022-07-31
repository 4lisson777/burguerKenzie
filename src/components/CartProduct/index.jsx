import { Product, Info, Quantity, Button } from './styles';

const CartProduct = ({ product, addCart, setAddCart }) => {
  const { name, category, img, quantity } = product;

  const handleAddQuantity = () => {
    setAddCart([...addCart, product]);
  };

  const handleRemoveQuantity = () => {
    const indexProduct = addCart.findIndex((item) => item.id === product.id);
    setAddCart(addCart.filter((item, index) => index !== indexProduct));
  };

  return (
    <Product>
      <Info>
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div>
          <h1>{name}</h1>
          <span>{category}</span>
        </div>
      </Info>
      <Quantity>
        <Button onClick={() => handleRemoveQuantity()}>-</Button>
        <span>{quantity}</span>
        <Button onClick={() => handleAddQuantity()}>+</Button>
      </Quantity>
    </Product>
  );
};

export default CartProduct;
