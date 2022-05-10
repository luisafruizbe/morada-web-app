import styled,{ createGlobalStyle } from "styled-components"
import { MENU_HEIGHT } from "./constants/styles";

export const GlobalStyle = createGlobalStyle`
    *, ::after, ::before {
      box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Lato";
    }
`;
export const PageTitle = styled.p`
  font-size: 2.0em;
`;
export const Subtitle = styled.p`
  color: #C0C2D2;
  font-size: 1.0em;
  text-transform:capitalize;
  margin: 0;
  margin-top: 3px;
`;
//form styles
export const FormControl = styled.div`
  width: 100%;
  margin: 5px 0;
  border-radius: 6px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  display: flex;

`;

export const FormControlInput = styled.div`
  flex: 1;
  label{
    display: block;
    font-size: 0.95em;
    color: #222;
    font-weight: 500;
  }

  input[type="email"], input[type="password"],input[type="text"]{
    font-size: 1.1em;
    display: block;
    width: 100%;
    padding: 5px 10px;
    margin: 0px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const FormControlAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterFixed = styled.footer`
  position: fixed;
  bottom: ${MENU_HEIGHT + 5}px;
  left: 0;
  width: 100%;
`;

