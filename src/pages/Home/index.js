import { Fragment, useState, useEffect } from "react";
import { PropertyTextHeader } from "./components/PropertyTextHeader";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyWelcome } from "./components/PropertyWelcome";
import { PropertyTypesContainer, PropertyWelcomeContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoLocationSharp, IoStorefront} from "react-icons/io5";
import { PropertyCard } from "./components/PropertyCard";
import { Page } from "../../components/Page";

let userLogin = "Luisa Fernanda Ruiz";

const PropertiesTypes = [
    { id:1, icon: IoBusiness, label: 'Apartamentos'},
    { id:2, icon: IoHome, label: 'Casas'},
    { id:3, icon: IoLocationSharp, label: 'Lotes'},
    { id:4, icon: IoMap, label: 'Fincas'},
    { id:5, icon: IoStorefront, label: 'Locales'},

];

export const Home = () => {

    const [propertyTypeSelected, setPropertyTypeSelected] = useState(3);

    const propertyTypeHandler = (id) => {
        setPropertyTypeSelected(id);
    }
    useEffect(() => {
        //acciones a ejecutar 
        console.log('Se modifico Propertypeselected')
    },[propertyTypeSelected])

    return (
    <Page>
        <PropertyWelcomeContainer>
            <PropertyWelcome name={userLogin}/>
        </PropertyWelcomeContainer>
        <PropertyTextHeader/>
        <PropertyTypesContainer>
         {
             PropertiesTypes.map(item => 
                <PropertyTypeButton 
                    selected = {propertyTypeSelected === item.id }
                    icon = {item.icon} 
                    label = {item.label} 
                    id = {item.id}
                    onPress = {propertyTypeHandler}
                /> 
            )
         }
        </PropertyTypesContainer>

        <PropertyCard/>
        <PropertyCard/>
        <PropertyCard/>
         
    </Page>
    )
};