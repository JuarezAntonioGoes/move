import styled from "styled-components";

const Button = styled.button`
  margin-top: 2rem;
  width: 24.31rem;
  height: 5rem;
  color: ${({ timeActive }) => (timeActive ? "#666666" : "#fff")};
  background-color: ${({ timeActive }) => (timeActive ? "#fff" : "#5965e0")};
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

  img {
    margin-left: 1rem;
  }

  &:hover {
    background-color: ${({ timeActive }) =>
      timeActive ? "#E83F5B" : "#4953b8"};
    color: #fff;
  }

  &:disabled {
    color: #666666;
    background-color: #fff;
    border-bottom: 4px solid #4cd62b;
    cursor: not-allowed;
  }
`;

export default Button;
