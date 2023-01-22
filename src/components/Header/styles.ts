import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  background: #fff;

  #LoginButtons {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      height: 3rem;
      padding: 0 2rem;
      border: 0;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      background: #ea599c;
      transition: filter 0.2s;
      cursor: pointer;
      &:hover {
        filter: brightness(0.9);
      }
    }
    a {
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        list-style: none;

        a {
          font-size: 1.25rem;
          font-weight: 400;
          color: #4d4d4d;
          transition: filter 0.2s;
          text-decoration: none;
          &:hover {
            color: #000;
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
