import { Fragment } from "react";
import { AiFillEnvironment } from "react-icons/ai";
import { PropertyTextHeaderWrapper } from "./styles";

export const PropertyTextHeader = ({name}) => (

    <Fragment>
        <PropertyTextHeaderWrapper>
            <div>Find</div>
            <p>best place nerby</p>
            <AiFillEnvironment/>
        </PropertyTextHeaderWrapper>       
    </Fragment>
   
)