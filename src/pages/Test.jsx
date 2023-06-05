import styled from "styled-components";

import { HOME_COPY } from "../content/home";
import { Wrapper } from "../components";

const AboutSection = styled.section`
  display: grid;
`;

const Satanism = () => {
  return (
    <AboutSection>
      <Wrapper>
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Wrapper>
      <Wrapper>
        <h2>Yeet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
