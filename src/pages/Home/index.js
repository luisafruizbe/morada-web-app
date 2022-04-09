import { Fragment } from "react";
import { PropertyTextHeader } from "./components/PropertyTextHeader";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyWelcome } from "./components/PropertyWelcome";
import { PropertyTypesContainer, PropertyWelcomeContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoLocationSharp, IoStorefront} from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";

let userLogin = "Juan";

const PropertiesTypes = [
    { icon: IoBusiness, label: 'Apartamentos'},
    { icon: IoHome, label: 'Casas'},
    { icon: IoLocationSharp, label: 'Lotes'},
    { icon: IoMap, label: 'Fincas'},
    { icon: IoStorefront, label: 'Locales'},

];

export const Home = () => (
    <Fragment>
        <PropertyWelcomeContainer>
            <PropertyWelcome name={userLogin}/>
        </PropertyWelcomeContainer>
        <PropertyTextHeader/>
        <PropertyTypesContainer>
         {
             PropertiesTypes.map(item => <PropertyTypeButton icon={item.icon} label={item.label} /> )
         }
        </PropertyTypesContainer>

        <PropertyCard>
            
        </PropertyCard>
         
    </Fragment>
   
)