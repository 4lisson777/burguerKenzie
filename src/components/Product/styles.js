import styled from 'styled-components';

export const Item = styled.li`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
  /* padding: 10px; */
  border: 2px solid var(--color-gray-20);
  border-radius: 5px;
  min-width: 300px;
  height: 346px;

  figure {
    max-height: 151px;
    width: 100%;
    background-color: var(--color-gray-0);
    display: flex;
    justify-content: center;
    overflow: hidden;
    border-radius: 2px 2px 0 0;
    img {
      object-fit: contain;
      /* object-position: top; */
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    gap: 15px;

    h1 {
      font: 700 18px/24px 'Inter';
      color: var(--color-gray-100);
    }

    small {
      font: 400 12px/16px 'Inter';
      color: var(--color-gray-50);
    }

    span {
      font: 600 14px/24px 'Inter';
      color: var(--color-primary);
    }

    button {
      width: 106px;
      height: 40px;
      background-color: var(--color-primary);
      border: none;
      border-radius: 8px;
      color: #fff;
      font: 600 14px/17px 'Inter';
    }
  }
`;
