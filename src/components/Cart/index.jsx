import CartProduct from '../CartProduct';
import { List, Title } from './styles';
import CartTotal from '../CartTotal';

const Cart = ({ cart, addCart, setAddCart }) => {
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
          cart.map((product) => {
            return (
              <CartProduct
                key={product.id}
                product={product}
                addCart={addCart}
                setAddCart={setAddCart}
              />
            );
          })
        )}
      </List>
      {addCart.length !== 0 && (
        <CartTotal addCart={addCart} setAddCart={setAddCart} />
      )}
    </>
  );
};

export default Cart;
