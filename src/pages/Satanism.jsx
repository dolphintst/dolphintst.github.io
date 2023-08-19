import styled from "styled-components";

import { HOME_COPY } from "../content/home";
import { Wrapper } from "../components"

const AboutSection = styled.section`
  display: grid;
`;

const Satanism = () => {
  return (
    <AboutSection>
      <Wrapper>
        <h2>About Us</h2>
        <p>
          The Mission Of The Satanic Temple Is To Encourage Benevolence And
          Empathy, Reject Tyrannical Authority, Advocate Practical Common Sense,
          Oppose Injustice, And Undertake Noble Pursuits.
        </p>
      </Wrapper>
      <Wrapper>
        <h2>Satanism</h2>
        <p>
          We have publicly confronted hate groups, fought for the abolition of
          corporal punishment in public schools, applied for equal
          representation when religious installations are placed on public
          property, provided religious exemption and legal protection against
          laws that unscientifically restrict people's reproductive autonomy,
          exposed harmful pseudo-scientific practitioners in mental health care,
          organized clubs alongside other religious after-school clubs in
          schools besieged by proselytizing organizations, and engaged in other
          advocacy in accordance with our tenets.
        </p>
      </Wrapper>
      <Wrapper>
        <h2>FUNDAMENTAL TENETS</h2>
        <p>i. {HOME_COPY.TENANTS.LIST[0]} </p>
        <p>ii. {HOME_COPY.TENANTS.LIST[1]} </p>
        <p>iii. {HOME_COPY.TENANTS.LIST[2]} </p>
        <p>iv. {HOME_COPY.TENANTS.LIST[3]} </p>
        <p>v. {HOME_COPY.TENANTS.LIST[4]} </p>
        <p>vi. {HOME_COPY.TENANTS.LIST[5]} </p>
        <p>vii. {HOME_COPY.TENANTS.LIST[6]} </p>
      </Wrapper>
    </AboutSection>
  );
};
export default Satanism;
