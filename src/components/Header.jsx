import styled from "styled-components";

import { headMixin, displayComp } from "../styles";
import { MenuModal } from ".";

const MobileHead = styled.h1`
  ${headMixin};
  padding: 0.5rem 1.14rem;
`;

const Head = styled.h1`
  ${headMixin};
  justify-content: center;
  margin-bottom: 0;
`;

export const Header = () => {

  return (
    <>
      {displayComp('(max-width:767px)') ? (
        <MobileHead>
          NYC TST
          <MenuModal />
        </MobileHead>
      ) : (
        <Head> NYC Chapter of The Satanic Temple </Head>
      )}
    </>
  );
};
