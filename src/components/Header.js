import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--pink);
    color: var(--light-blue);
    padding: 0 40px;
    -webkit-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    -moz-box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
    box-shadow: 0px 2px 10px -5px rgba(21,6,5,1);
`

function Header() {
    return (
        <StyledHeader>
            <Link to='/'>
                <h2>Tooter</h2>
            </Link>
            <Link to='/cart'>
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
            </Link>
        </StyledHeader>
    )
}

export default Header