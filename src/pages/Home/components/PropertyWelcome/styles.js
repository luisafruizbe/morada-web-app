import styled from 'styled-components'
import { PRIMARY_COLOR } from '../../../../constants/styles';

export const PropertyWelcomeWrapper = styled.div `
    display: flex;
    margin: 10px;
    flex-direction: row;
    align-items: center;

    p{
        margin: 10px 5px;
    }

    section{
        padding: 5px;
        margin: 10px 5px 10px 50px;
        font-size: 1.5em;
        color: #4A148C;
        border-radius: 10px;

        //Sombras
   box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    }

` 
export const IconWrapper = styled.div `
    margin: 10px;
    
    color: #4A148C;
    svg{
        font-size: 2.5em;
    }

` ;
