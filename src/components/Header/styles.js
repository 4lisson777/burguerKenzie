import styled from 'styled-components';

export const Container = styled.header`
  max-width: 100%;
  background-color: var(--color-gray-0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  padding: 18px 16px 14px 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 80px;
    padding: 10px 80px;
  }
`;
