import styled from "styled-components";

export const ConstainerContador = styled.div`
  width: 24.31rem;
  height: 9rem;
  color: #2e384d;
  background-color: #f2f3f5;
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 7.5rem;
  font-family: "Rajdhani", sans-serif;

  div {
    display: flex;
    height: 100%;
  }

  span {
    background-color: #fff;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.5rem;
  }

  span:nth-child(2n-1) {
    border-radius: 5px 0 0 5px;
  }

  span:nth-child(2n) {
    border-radius: 0 5px 5px 0;
  }

  span:nth-child(2n-1) {
    border-right: 0.125rem solid #f0f1f3;
  }
`;
