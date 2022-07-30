import { Container } from './styles';
import logoImg from '../../assets/logoImg.png';
import InputSearch from '../InputSearch';

const Header = ({ productList, setFilteredList }) => {
  return (
    <Container>
      <img src={logoImg} alt="Logo" />
      <InputSearch
        productList={productList}
        setFilteredList={setFilteredList}
      />
    </Container>
  );
};

export default Header;
