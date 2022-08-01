import { useState, useEffect } from 'react';
import { Container } from './styles';

const CartTotal = ({ addCart, setAddCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(addCart.reduce((acc, cur) => (acc += cur.price), 0));
  }, [addCart]);

  return (
    <Container>
      <div>
        <span>Total</span>
        <small>R$ {total.toFixed(2)}</small>
      </div>
      <button onClick={() => setAddCart([])}>Remover Todos</button>
    </Container>
  );
};

export default CartTotal;
