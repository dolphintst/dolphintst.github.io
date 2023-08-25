import styled from "styled-components";

import { Wrapper } from "../components";
import { LINK_COPY } from "../content/link";

const Para = styled.p`
  margin: 0.5em 0;
`;

const linkGenerator = (obj) => {
  const resultArray = [];
  for (const key in obj) {
    resultArray.push(<h3>{key}</h3>);

    const subCategory = obj[key].map((touple) => (
      <li><a href={touple.LINK}>{touple.TITLE}</a></li>
    ));
    resultArray.push(<ul>{subCategory}</ul>);
  }
  return resultArray;
};

const LitClub = () => (
  <Wrapper>
    <h2>{LINK_COPY.HEADER}</h2>
    <Para>{LINK_COPY.BODY}</Para>
    {linkGenerator(LINK_COPY.CATEGORIES)}
  </Wrapper>
);

export default LitClub;