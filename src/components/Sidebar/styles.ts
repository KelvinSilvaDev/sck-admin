import Styled from "styled-components";

export const Container = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  background-color: #dee5ee;
  height: calc(100vh - 112px);
  width: 25%;
  
  nav {
    width: 100%;
    
    padding: 0 22px;
    
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    li {
        list-style: none;
        
        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-radius: 0.5rem;
            color: #000;
            font-size: 1.2rem;
            font-weight: 600;
            background-color: #fff;
            transition: 0.2s;
            &:hover {
                background-color: #e0e0e0;
            }
        }
    }
}

`;
