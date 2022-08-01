import styled from 'styled-components';

export const Product = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 80px;
  overflow: hidden;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  gap: 10px;

  figure {
    background-color: var(--color-gray-20);
    width: 80px;
    height: 80px;
    border-radius: 8px;

    img {
      height: 100%;
    }
  }

  div {
    margin-top: 5px;

    h1 {
      font: 700 18px/24px 'Inter';
      color: var(--color-gray-100);
    }

    span {
      font: 400 12px/16px 'Inter';
      color: var(--color-gray-50);
    }
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
  gap: 5px;
  width: 60px;

  span {
    font: 500 12px/15px 'Inter';
  }
`;

export const Button = styled.button`
  height: 20px;
  width: 20px;
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background-color: var(--color-primary);
  color: #fff;
  /* text-align: center; */
`;
