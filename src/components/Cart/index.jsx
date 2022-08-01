import CartProduct from '../CartProduct';
import { Container, Empty, List, Title } from './styles';
import CartTotal from '../CartTotal';

const Cart = ({ cart, addCart, setAddCart }) => {
  return (
    <Container>
      <Title>Carrinho</Title>
      <List>
        {typeof cart == 'undefined' || cart.length === 0 ? (
          <Empty>
            <h1>Sua sacola está vazia</h1>
            <span>Adicione itens</span>
          </Empty>
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
    </Container>
  );
};

export default Cart;
