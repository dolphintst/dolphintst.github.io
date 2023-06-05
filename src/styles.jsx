import { useMediaQuery } from "@mui/material";
import styled, { createGlobalStyle } from "styled-components";

const COLOR_SCHEME = {
  RED_LIGHT: "#AA1C09",
  RED_DARK: "#611005",
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  GREEN: "#57C826",
};

const GlobalStyle = createGlobalStyle`
    // Navbar Dropdown Menu CSS
    .MuiMenu-root ul {
        background-color: ${COLOR_SCHEME.BLACK};
        border: 1px solid ${COLOR_SCHEME.RED_DARK};
    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
}
    a {
        color: inherit;
        text-decoration: none;
        display: block;
        position: relative;
        padding: 0.2em 0;
        transition: all .2s ease-in;
    }
    a:focus,
    a:hover,
    a:active {
        color: ${COLOR_SCHEME.RED_LIGHT};
        transition: all .2s ease-in;
    }
    //   a::after {
    //     content: '';
    //     position: absolute;
    //     bottom: 0;
    //     left: 0;
    //     width: 100%;
    //     height: 0.1em;
    //     background-color: ${COLOR_SCHEME.RED_DARK};
    //     opacity: 0;
    //     transition: opacity 300ms, transform 300ms;
    //   }
    //   a:hover::after,
    //   a:focus::after {
    //     opacity: 1;
    //     transform: translate3d(0, 0.2em, 0);
    //   }
    h1 {
        font-size: 2em;
        // font-size: 2.2em;
        margin: 0;
        display: grid;
        font-family: 'Cinzel', sans-serif;
    }
    h2 {
        font-size: 1.6em;
        margin: 0;
        display: grid;
        font-family: 'Cinzel', sans-serif;
    }
    p {
        font-weight: 400;
        line-height: 1.3em;
        font-size:1em;
    }
    body {
        font-family: 'Philosopher', sans-serif;
        margin: 0;
        display: grid;
        height: 100vh;
        width: 100vw;
        background-color: ${COLOR_SCHEME.BLACK};
        color: ${COLOR_SCHEME.WHITE};
        

    }
    #root {
    }
`;

const NavbarItemStyle = {
  display: "grid",
  placeSelf: "center",
  fontFamily: "Philosopher",
  textTransform: "none",
  letterSpacing: "0",
  fontSize: "1rem",
  lineHeight: "inherit",
  color: `${COLOR_SCHEME.BLACK} !important`,
  fontWeight: "700",
  textDecoration: "none",
  padding: "0.2em 1em",
  transition: "all .2s ease-in",
  cursor: "pointer !important",
};

const headMixin = () => {
    return `    
      background-color: ${COLOR_SCHEME.RED_DARK};
      color: ${COLOR_SCHEME.WHITE};
      padding: 0.5rem 1.6rem;
      margin: 0;
      display: grid;
      justify-content: space-between;
      font-weight: 700;
      grid-auto-flow: column;
      align-items: center;
      margin-bottom: 2rem;
      width:100%;
      box-sizing:border-box;
        `;
  };
  
const displayComp = (width) => {
    return useMediaQuery(width)   
}



export { GlobalStyle, NavbarItemStyle, COLOR_SCHEME, headMixin, displayComp };
