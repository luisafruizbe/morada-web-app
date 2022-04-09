import styled from 'styled-components'

export const PropertyTypeButtonWrapper = styled.div `
    background-color: #F3E5F5;
    border-radius: 10px;

    min-width: 150px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin: 5px 0 10px;
        color: #4A148C;
    }

    &:hover {
        background: #4A148C;
        cursor: pointer;
        svg{
            color: #fff;
        }
        p{
            color: #fff;
        }
    }
` 

export const IconWrapper = styled.div `
    margin-top: 10px;

    svg{
        font-size: 2em;
        color: #4A148C;
    }
` ;
