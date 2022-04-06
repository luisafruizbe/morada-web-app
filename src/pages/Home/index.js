import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyWelcome } from "./components/PropertyWelcome";
import { PropertyTypesContainer, PropertyWelcomeContainer } from "./styles";

let userLogin = "Juan";

const PropertiesTypes = [
    { icon: 'icono-apartamento', label: 'Apartamentos'},
    { icon: 'icono-casa', label: 'Casas'},
    { icon: 'icono-lote', label: 'Lotes'},
    { icon: 'icono-finca', label: 'Fincas'},
    { icon: 'icono-local', label: 'Locales'},

];

export const Home = () => (
    <Fragment>
        <PropertyWelcomeContainer>
            <PropertyWelcome name={userLogin}/>
        </PropertyWelcomeContainer>

        <PropertyTypesContainer>
         {
             PropertiesTypes.map(item => <PropertyTypeButton icon={item.icon} label={item.label} /> )
         }
        </PropertyTypesContainer>
         
    </Fragment>
   
)