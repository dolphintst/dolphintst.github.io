import styled from "styled-components";

import { COLOR_SCHEME } from "../styles";

export const Wrapper = styled.div`
  background-color: ${COLOR_SCHEME.RED_DARK};
  margin: 1.44rem;
  padding: 2.72rem 3.5rem;
  padding:1.6rem;
  font-weight: 700;
  display: grid;
  grid-auto-flow: row;
  font-weight: 700;
  border-radius: 3px;
  
  @media (min-width:768px) and (max-width: 1023px) {
    margin: 1.44rem 3.6rem;
    padding: 2.72rem 3.6rem;
    
  }
  
  @media screen and (min-width: 1024px){
    width:850px;
    padding: 2.72rem 3.6rem;
    margin: 1.44rem auto;
  }
`;


