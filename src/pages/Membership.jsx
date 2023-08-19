import styled from "styled-components";

import { Wrapper } from "../components";
import { MEMBERSHIP } from "../content/membership";

const Para = styled.p`
  margin: 0.5em 0;
`;

const Membership = () => (
    <Wrapper>
        <h1>{MEMBERSHIP.TITLE}</h1>
        <Para>{MEMBERSHIP.MAIN}</Para>
        {MEMBERSHIP.SECTIONS.map(sec => (
            <>
                <h2>{sec.TITLE}</h2>
                <Para>{sec.COPY}</Para>
            </>
        ))}
    </Wrapper>

);

export default Membership;

