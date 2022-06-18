import styled from 'styled-components';
import { MENU_HEIGHT } from '../../constants/styles';

export const MenuWrapper = styled.div`
    border-top: 2px solid #ccc;
    width: 100%;
    height: ${MENU_HEIGHT}px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    a{
        flex: 1;
        text-decoration: none;
    }
`;

export const MenuItemWrapper = styled.section`
    border-left: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    svg{
        color: #4A148C;
        font-size: 1.3em;
    }
    p{
        margin: 5px 0;
    }

    &:hover{
        background-color: #4A148C;
        svg{
            color: white;
        }

        p{
            color: white;
        }

    }
`;
