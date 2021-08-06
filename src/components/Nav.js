import React from 'react'

//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import greenwood from '../assets/greenwood.jpg';

function Nav() {

    return (
        <StyledNav>
            <div>
                <h2>Football Squad</h2>
                <p>A preview of the top 5 leagues in europe.</p>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    background-image: linear-gradient(to right bottom, #077b8a1c, #5c3c9250), url(${greenwood});
    height: 50rem;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 3rem 5rem;
    text-align: center;
    background-color: white;

    @media (max-width: 56.25em) {
        height: 30rem;
    }
    h2 {
        color: white;
        font-size: 12rem;
        text-shadow: -.2rem -.2rem #2c0c4933;

        @media (max-width: 56.25em) {
        font-size: 7rem; 
    }
    }

    p {
        color: white;
        font-size: 5rem;
        text-shadow: -.2rem -.2rem #2c0c4933;

        @media (max-width: 56.25em) {
        font-size: 2rem;
    }

    }

    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        font-weight: bold;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background-color: #923cb5;
        color: white;
    }
`;

export default Nav
