import { Product, Info, Quantity, Button } from './styles';

const CartProduct = ({ name, category, img, quantity }) => {
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
        <Button>-</Button>
        <span>{quantity}</span>
        <Button>+</Button>
      </Quantity>
    </Product>
  );
};

export default CartProduct;
