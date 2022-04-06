import { Fragment } from "react";
import { PropertyWelcomeWrapper } from "./styles";
import { IoBulbOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IconBase } from "react-icons";

export const PropertyWelcome = ({name}) => (

    <PropertyWelcomeWrapper>
        <div className="userClass">
            <FaUserCircle/>
            <p>Welcome {name}</p>
        </div>
        
        <div className="notificationClass">
            <IoBulbOutline/>
        </div>
        
    </PropertyWelcomeWrapper>
)