import { Subtitle } from "../../../../globalStyles";
import { PropertyBusinessType } from "../PropertyBusinessType";
import { PropertyTypeLabel } from "../PropertyTypeLabel";
import { CardImageWrapper, PropertyCardWrapper, PropertyInfoWrapper } from "./styles";

export const PropertyCard = () => (
    
    <PropertyCardWrapper>
       <CardImageWrapper>
           <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
       </CardImageWrapper>
       <PropertyInfoWrapper>
            <h3>Apartamento en laureles</h3>
            <Subtitle>
                Laureles, Medellín
            </Subtitle>
            <PropertyTypeLabel/>
            <PropertyBusinessType/>
            <p>$400'000.000</p>
       </PropertyInfoWrapper>
    </PropertyCardWrapper>
)