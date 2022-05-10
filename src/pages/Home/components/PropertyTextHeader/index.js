import { Fragment } from "react";
import { IoWalk } from "react-icons/io5";
import { IconWrapper, PropertyTextHeaderWrapper } from "./styles";

export const PropertyTextHeader = ({name}) => (

    <Fragment>
        <PropertyTextHeaderWrapper>
            
            <div>
                <section>Find,</section>
                <p>best place nearby</p>
            </div>
            <IconWrapper>
                <IoWalk/>
            </IconWrapper>
        </PropertyTextHeaderWrapper>       
    </Fragment>
   
)