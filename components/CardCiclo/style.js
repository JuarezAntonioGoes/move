import styled from "styled-components";

export const CicloContainer = styled.div`
  width: 31.25rem;
  height: 29.25rem;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.1));
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  width: 16.88rem;

  h1 {
    color: #666666;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    grid-template-columns: 80px 1fr;
    font-size: 1rem;
    gap: 0.8rem;
  }
`;
