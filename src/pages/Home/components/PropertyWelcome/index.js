import { Fragment } from "react";
import { IconWrapper, PropertyWelcomeWrapper } from "./styles";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const PropertyWelcome = ({name}) => (

    <Fragment>

         <PropertyWelcomeWrapper>
            <IconWrapper>
                <FaUserCircle/>
            </IconWrapper>
           
            <p>Bienvenido, {name}</p>
            <section>
                <IoBulbOutline/>
            </section>

        </PropertyWelcomeWrapper>

    </Fragment>
   
)