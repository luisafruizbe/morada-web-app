import { Page } from "../../components/Page";
import { Subtitle } from "../../globalStyles";
import { PropertyBusinessType } from "../Home/components/PropertyBusinessType";
import { PropertyPrice } from "../Home/components/PropertyPrice";
import { PropertyTypeLabel } from "../Home/components/PropertyTypeLabel";
import { ImageWrapper, PropertyInfoWrapper, PropertyWrapper } from "./styles";


export const Property = (props) => (
    <Page>
        <PropertyWrapper>
            <ImageWrapper>
                <img alt="apartamento" src="https://images.ctfassets.net/8lc7xdlkm4kt/5XZ6f7kcqu0cVgTnFoFnLt/52ac8951ab8edd991e28b383a6eac830/61M2.jpg"/>
            </ImageWrapper>
            <PropertyInfoWrapper>
                <h3>Apartamento en laureles</h3>
                <Subtitle>
                    Laureles, Medellín
                </Subtitle>
                <PropertyTypeLabel/>
                <PropertyBusinessType/>
                <PropertyPrice/>

                <Subtitle>
                    Descripción
                </Subtitle>
                
                <p>
                    Aca va la descripcion de cada uno de los apartamentos
                </p>
            </PropertyInfoWrapper>
        </PropertyWrapper>
        
    </Page>
    
)