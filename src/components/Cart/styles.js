import styled from 'styled-components';
export const Container = styled.div`
  max-width: 400px;
  margin: 20px auto;
  background-color: var(--color-gray-0);

  @media (max-width: 400px) {
    margin: 20px;
  }

  @media (min-width: 768px) {
    min-width: 370px;
    margin-top: 15px;
    margin-right: 15px;
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h1 {
    font: 700 18px/24px 'Inter';
    color: var(--color-gray-100);
  }
  span {
    font: 400 14px/24px 'Inter';
    color: var(--color-gray-50);
  }
`;

export const List = styled.ul`
  min-height: 180px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  display: flex;
  align-items: center;
  margin: 20px;
  padding-bottom: 20px;
  /* justify-content: center; */
  overflow-y: auto;
  background-color: var(--color-gray-0);

  @media (min-width: 768px) {
    min-height: 120px;
  }
`;

export const Title = styled.h1`
  background-color: var(--color-primary);
  height: 50px;
  padding-left: 21px;
  text-align: left;
  font: 700 18px/24px 'Inter';
  color: #fff;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
`;
