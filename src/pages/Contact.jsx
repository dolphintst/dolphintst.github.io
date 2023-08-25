import { Link } from "react-router-dom";
import styled from "styled-components";

import { Wrapper } from "../components";

const Para = styled.p`
  margin: 0.5em 0;
`;

const Contact = () => (
    <Wrapper>
        <Para>For general inquiries, please contact us via our <a href="https://www.facebook.com/TSTNYC/">Facebook Page</a></Para>
        <Para>For media inquiries about the NYC chapter, email <a href="mailto:media@thesatanictemplenyc.com">Press and media</a></Para>
        <Para>For NYC chapter membership inquiries, refer to <Link to={"/membership"}>Membership Page</Link></Para>
    </Wrapper>

);

export default Contact;
