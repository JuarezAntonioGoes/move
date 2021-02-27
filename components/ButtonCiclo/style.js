import styled from "styled-components";

const Button = styled.button`
  width: 24.31rem;
  height: 5rem;
  color: #fff;
  background-color: #5965e0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25rem;
  font-family: "Inter", sans-serif;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-left: .5rem;
  }

  &:hover {
    background-color: #4953b8;
  }
`;

export default Button;
