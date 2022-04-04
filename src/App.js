import { Home } from "./pages/Home";
import { Fragment } from "react";
import { GlobalStyle } from "./globalStyles";

export const App = () => (
    <Fragment>
        <GlobalStyle/>
        <Home />
    </Fragment>
)