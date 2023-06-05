import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import { Link } from "react-router-dom";

import menu from "../assets/menu.png";
import { COLOR_SCHEME } from "../styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HamburgerMenu = styled.img`
  width: 2rem;
  height: 2rem;
  margin:0;
`;

const NavLink = styled(Link)`
  display: grid;
  place-self: center;
  color: ${COLOR_SCHEME.WHITE};
  cursor: pointer !important;
  font-size: 1.5rem;
`;

export const MenuModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <div>
      <Button onClick={handleOpen} style={{margin:'0', padding: '0', justifyContent:'flex-end'}}>
        <HamburgerMenu src={menu} />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            backgroundColor: "black",
            borderRadius: "5px",
            width: "100vw",
            height: "80vh",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            padding: '0rem 1.6rem',
            alignContent: 'space-evenly'
          }}
          onClick={handleClose}
        >
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/donate'}>Donate</NavLink>
          <NavLink to={'/events'}>Events</NavLink>
          <NavLink to={'/godless'}>gotham</NavLink>
          <NavLink to={'lit'}>Lit</NavLink>
          <NavLink to={'/ministry'}>Ministry</NavLink>
          <NavLink to={'/test'}>test</NavLink>
          <NavLink to={'/blog'}>Blog</NavLink>
        </Box>
      </Modal>
    </div>
  );
}
