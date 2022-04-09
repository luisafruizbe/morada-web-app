import styled from 'styled-components'

export const PropertyCardWrapper = styled.div `
   border: 1px solid #ccc;
   border-radius: 15px;
   padding: 15px;
   display: flex;
   margin: 10px;

   //Sombras
   box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
` ;

export const CardImageWrapper = styled.div `
    flex: 30;
    border-radius: 15px;
    img{
        width: 100%;
        border-radius: inherit;
    }
` ;

export const PropertyInfoWrapper = styled.div `
    flex: 70;
    margin-left: 10px;

    h3{
        margin: 0px;
    }



` ;
