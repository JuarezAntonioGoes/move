import styled from "styled-components";

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
