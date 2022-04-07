import { Fragment } from "react";
import { PropertyWelcomeWrapper } from "./styles";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IconBase } from "react-icons";

export const PropertyWelcome = ({name}) => (

    <Fragment>

         <PropertyWelcomeWrapper>
            <div>
                <section>
                    <FaUserCircle/>
                </section>
                <p>Bienvenido {name}</p>
            </div>
            <section>
                <IoBulbOutline/>
            </section>

        </PropertyWelcomeWrapper>

    </Fragment>
   
)