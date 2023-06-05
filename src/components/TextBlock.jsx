import styled from "styled-components";

import { Wrapper }  from ".";

const Para = styled.p`
  margin: 0.5em 0;
`;

export const TextBlock = props => (
   <Wrapper>
    <h2>{props.header}</h2>
    <Para>{props.body}</Para>
  </Wrapper>
);

