import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Header = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 112px);
`;

export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-family: "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-weight: 600;
    position: relative;
    span {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      cursor: pointer;
    }
  }

  input {
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #9d9d9d;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    outline: none;
  }
  button {
    background-color: #3a8edd;
    color: #fff;
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: #2d6fa3;
    }
  }
  p {
    font-size: 1rem;
    font-family: "Inter", sans-serif;
    text-align: center;
    a {
      color: #3a8edd;
      text-decoration: none;

      transition: 0.2s;
      &:hover {
        color: #2d6fa3;
      }
    }
  }
`;
