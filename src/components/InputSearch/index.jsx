import { Container } from './styles';
import { useState } from 'react';

const InputSearch = ({ productList, setFilteredList }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (value === '') {
      setFilteredList(productList);
    } else {
      const re = new RegExp(value.trim(), 'gi');
      setFilteredList(
        productList.filter(({ name }) => name.toLowerCase().match(re)),
      );
    }
  };

  return (
    <Container onSubmit={(event) => handleSearch(event.preventDefault())}>
      <input
        type="text"
        placeholder="Digitar Pesquisa"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </Container>
  );
};

export default InputSearch;
