import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
  height: calc(100vh - 112px);
`;

export const Title = styled.h1``;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  margin-right: 1rem;
  min-height: 500px;
`;

export const HeaderHeadline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  text-align: center;
  margin: 0 auto;
  p {
    font-size: 1.4rem;
    font-weight: 500;
    color: #5d5d5d;
    letter-spacing: 0.5px;
    line-height: 32px;
  }
`;

export const ContentCardWrapp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1rem;
  background: #ffffff;
`;
