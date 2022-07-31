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
        <span>`R$ {total.toFixed(2)}`</span>
      </div>
      <button onClick={() => setAddCart([])}>Remover Todos</button>
    </Container>
  );
};

export default CartTotal;
