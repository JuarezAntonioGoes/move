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
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    font-size: 1rem;
    gap: 0.8rem;
    color: #666666;
  }
`;

export const MainResult = styled.main`
  width: 21.625rem;

  header {
    width: 100%;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e3dcdde0;

    h2 {
      font-weight: 500;
      color: #5965e0;
      font-size: 1.25rem;
      text-align: center;
    }
  }

  h1 {
    color: #2e384d;
    text-align: center;
    font-weight: 600;
    font-size: 1.87rem;
    margin-bottom: 1.5rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    color: #666666;
    font-weight: 400;
  }

  img {
    margin: 1rem auto;
  }
`;

export const ContainerIntro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  footer {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 0.8rem;
  }
`;

export const Button = styled.button`
  margin-top: 1rem;
  width: 10.875rem;
  height: 3.125rem;

  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isCancel }) => (isCancel ? "#E83F5B" : "#4CD62B")};
`;
