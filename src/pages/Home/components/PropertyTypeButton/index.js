import { PropertyTypeButtonWrapper } from "./styles";
import { IoAirplaneOutline } from "react-icons/io5";

export const PropertyTypeButton = ({icon , label}) => (
    
  <PropertyTypeButtonWrapper>
      <IoAirplaneOutline/>
      <p>{label}</p>
  </PropertyTypeButtonWrapper>
)