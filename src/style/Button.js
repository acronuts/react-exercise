import styled from "styled-components";
import { colors } from "./Theme";

export const Button = styled.button`
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    min-width: 12%;
    padding: 0.8rem 1.4rem;
    font-size: 1.1rem;
    border: 1px solid ${colors.blue};
    border-radius: 4px;
    overflow: hidden;
    /* text-align: center; */
    color: ${colors.blue};
    font-weight: 600;
    margin-left: 2%;
`