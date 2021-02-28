import styled from "styled-components";

export const Container = styled.div``;

export const ContainerAvatar = styled.div`
  display: flex;
  width: 19.25rem;
  height: 5.5rem;
`;

export const FotoPerfil = styled.img`
  border-radius: 50%;
  width: 5.5rem;
  height: 5.5rem;
  object-fit: cover;
`;

export const InfoUser = styled.div`
  margin-left: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: #2e384d;
  }

  p {
    display: flex;
    gap: 0.5rem;
  }

  p span {
    color: #666666;
  }
`;

export const ContainerDesafio = styled.div`
  margin: 2.5rem 0;
  width: 24.32rem;
  font-family: "Inter", sans-serif;
  color: #666666;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #D7D8DA;

  span {
    font-weight: 600;
    font-size: 1.125rem;
    display: flex;
    height: 1.125rem;
  }

  span:nth-child(2) {
    font-size: 1.5rem;
    height: 1.5rem;
  }
`;
