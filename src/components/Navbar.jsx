import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { COLOR_SCHEME, NavbarItemStyle, displayComp } from "../styles";

const NavWrapper = styled.div`
  display:grid;
  margin: 1.6rem;
  padding: 0.72rem 3.6rem;
  font-weight: 700;
  grid-auto-flow: column;
  font-weight: 700;
  width: 100%;
  border-color: ${COLOR_SCHEME.RED_DARK};
  border-style: solid;
  border-width: 1px 0px;

  @media screen and (min-width: 1024px){
    width:850px;
    margin: 1.44rem auto;
  }
`;

const NavLink = styled(Link)`
  display: grid;
  place-self: center;
  color: ${COLOR_SCHEME.WHITE};
  cursor: pointer !important;
`;

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 500);
  };

  const renderDropdown = () => (
    <>
      <NavLink to={`/about`} onMouseOver={handleClick}>
        About
      </NavLink>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        sx={{ marginTop: "12px" }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onMouseLeave: () => handleMouseLeave(),
        }}
      >
        <MenuItem sx={NavbarItemStyle} onClick={handleClose}>
          <NavLink to={`/test`}>test</NavLink>
        </MenuItem>
        <MenuItem sx={NavbarItemStyle} onClick={handleClose}>
          <NavLink to={`/ministry`}>Ministry</NavLink>
        </MenuItem>
        <MenuItem sx={NavbarItemStyle} onClick={handleClose}>
          <NavLink to={`/blog`}>Blog</NavLink>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <>
      {displayComp('(min-width:768px)') && (
        <NavWrapper>
          <NavLink to={`/`}>Home</NavLink>
          {renderDropdown()}
          <NavLink to={`/lit-club`}> Lit Club</NavLink>
          <NavLink to={`/godless-gotham`}> Gotham</NavLink>
          <NavLink to={`/events`}>Events</NavLink>
          <NavLink to={`/donate`}>Donate</NavLink>
        </NavWrapper>
      )}
    </>
  );
};
