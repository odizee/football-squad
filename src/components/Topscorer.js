import React from 'react'
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

function Topscorer({name, image, age, team, goals, assist}) {
    
    const {isLoading} = useSelector((state) => state.detail)

    return (
        <>
        {isLoading && (<StyledTop>
            <div className="card">
                <h4>{name == "L. Messi" ? name = name + " (Scamssi)" : name }</h4>
                <img src={image} alt={name}/>
                <p>Age: {age}</p>
                <p>Team: {team}</p>
                <p>Goals: {goals}</p>
                <p>Assists: {assist}</p>
            </div>
        </StyledTop>)}
        </>
    )
};

const StyledTop = styled(motion.div)`
    color: white;


    .card{
        transition: all .8s;
        height: 100%;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
        text-align: center;
        border-radius: 1rem;
        margin-right: 1rem;
        padding: 2rem 1rem;
        background: white; 
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 30rem;
        backface-visibility: hidden;
        transition: all .8s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;

        h4 {
            font-size: 1.5rem;
            font-weight: 700;
        }

        p {
            padding-top: .7rem;
        }
    img{
        width: 70%;
        height: 80%;
        object-fit: contain;
        border: solid 3px #25203a;
        border-radius: 1000000px;
        transition: transform 450ms;
    } 
}
`

export default Topscorer
