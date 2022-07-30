import CartProduct from '../CartProduct';
import { List, Title } from './styles';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <Title>Carrinho</Title>
      <List>
        {typeof cart == 'undefined' || cart.length === 0 ? (
          <div>
            <h1>Sua sacola está vazia</h1>
            <span>Adicione itens</span>
          </div>
        ) : (
          cart.map(({ id, img, name, category, price, quantity }) => {
            return (
              <CartProduct
                key={id}
                name={name}
                category={category}
                img={img}
                quantity={quantity}
              />
            );
          })
        )}
      </List>
    </>
  );
};

export default Cart;
