import { Item } from './styles';

const Product = ({ name, category, price, img }) => {
  return (
    <Item>
      <figure>
        <img src={img} alt="" />
      </figure>
      <div>
        <h1>{name}</h1>
        <small>{category}</small>
        <span>{price}</span>
        <button>Adicionar</button>
      </div>
    </Item>
  );
};

export default Product;
