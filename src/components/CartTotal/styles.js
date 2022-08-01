import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-top: 2px solid var(--color-gray-20);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    span {
      font: 600 14px/24px 'Inter';
      color: var(--color-gray-100);
    }

    small {
      font: 600 14px/24px 'Inter';
      color: var(--color-gray-50);
    }
  }

  button {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    border: none;
    background-color: var(--color-gray-20);
    color: var(--color-gray-50);
    font: 600 16px/19px 'Inter';
  }
`;
