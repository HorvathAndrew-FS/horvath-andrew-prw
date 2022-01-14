import React from 'react';
import styled from 'styled-components';

//outline button component
const ButtonOutline = props => {
    return (
        <Outline>
            {props.btnText}
        </Outline>

    )
}
export default ButtonOutline

const Outline = styled.button`
    height: 5.5rem;
    width: 12rem;
    background: transparent;
    font-size: 1.6rem;
    font-weight: 700;
    color: rgba(247, 100, 107, 1);
    text-transform: uppercase;
    border: 3px solid rgba(247, 100, 107, 1);
    border-radius: 5px;
`