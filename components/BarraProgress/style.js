import styled from "styled-components";

export const ConstainerBarra = styled.div`
  width: 80%;
  max-width: 960px;
  border: 1px solid #000;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-family: "Inter", sans-serif;
    font-size: 0.88rem;
    font-weight: 400;
    color: #666666;
    display: inline-block;
  }
`;

export const Barra = styled.div`
  background-color: #dcdde0;
  border-radius: 5px;
  height: 0.25rem;
  width: 85%;
  max-width: 845%;
`;

export const Progress = styled.div`
  height: 100%;
  width: 60%;
  background-color: #4cd62b;
  position: relative;

  div {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #666666;

    position: absolute;
    right: 0;
    top: 5px;
    transform: translate(50%);
  }
`;
