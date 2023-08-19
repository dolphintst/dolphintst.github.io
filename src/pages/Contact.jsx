import styled from "styled-components";

import { Wrapper } from "../components";

const Para = styled.p`
  margin: 0.5em 0;
`;

const Contact = () => (
    <Wrapper>
        <Para>For general inquiries, please contact us via our <a href="https://www.facebook.com/TSTNYC/">Facebook Page</a></Para>
        <Para>For media inquiries about the NYC chapter, email <a href="mailto:media@thesatanictemplenyc.com">Press and media</a></Para>
        <Para>For NYC chapter membership inquiries, email us <a href="mailto:membersnyc@thesatanictemplenyc.com"> here</a> or contact us on Facebook</Para>
    </Wrapper>

);

export default Contact;
