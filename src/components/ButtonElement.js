import styled from 'styled-components';
import { Link } from 'react-scroll';


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#0176bf' : '#0176bf')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '##FFF')};
    font-size: ${({fontBtn}) => (fontBtn ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0,2s ease-in-out;


    &:hover {
        transition: all .2s ease-in-out;
        background: ${({primary}) => (primary ? '#FFF' : '#01bf71')}
    }
`