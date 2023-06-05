import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLOR_SCHEME } from "../styles";

export const Button = styled(Link)`
    display:grid;
    background-color: ${COLOR_SCHEME.BLACK};
    color: ${COLOR_SCHEME.WHITE};
    justify-content:center;
    border-radius:5px;
    padding:1rem;
    margin-top:2rem;
`;
