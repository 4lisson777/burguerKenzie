import styled from 'styled-components';

export const Container = styled.form`
  height: 60px;
  background-color: var(--color-background);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border: 2px solid var(--color-gray-20);
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  max-width: 400px;

  input {
    border: none;
    padding-left: 5px;
    width: 100%;
  }

  input::placeholder {
    color: var(--color-gray-20);
  }

  button {
    padding: 11px 20px;
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    border-radius: 8px;
  }

  &:hover {
    border: 2px solid var(--color-gray-100);
    input::placeholder {
      color: var(--color-gray-50);
    }
    button {
      background-color: var(--color-primary-50);
    }
  }
`;
