import React from 'react'
//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
//REDUX
import {useDispatch} from 'react-redux';
import {loadDetail} from '../actions/detailAction';
import {Link} from 'react-router-dom';

function Team({name, stadium, founded, phone, image, tla, website, colours, email, id}) {
    const stringPathId = id.toString();
    //Load Detail Handler

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id))

    }
    const finished_clubs = [
        "Arsenal FC",
        "Chelsea FC",
        "FC Barcelona",
        "AC Milan"
    ]

    // const splitColors = () => { const colors = (colours && colours.split(" "));  
    
    // return colors;
    // }

    const splitColors = {
        color1: () => { const colors = (colours && colours.split("/"))

        return colors && colors[0]},

        color2: () => { const colors = (colours && colours.split("/"))

        return colors && colors[1]}
    }
    
    let colour1 = splitColors.color1();
    let colour2 = splitColors.color2();

    console.log(colour2);
    console.log(colours);

    const custom_style = {
      color: colour2,
      background: colour1,
      textshadow: '2px 2px #ff0000',
      
    };
    return (
        <StyledTeam layoutId={stringPathId}>   

            <div>
                <div className="card-side card-side-front">
                    <motion.h3 layoutId={`title ${stringPathId}`}>{(name === finished_clubs[0]) ? name+" (Finished Club)" : (name === finished_clubs[1]) ? name+" (Finished Club)" : (name === finished_clubs[2]) ? name+" (Trash Team)" : (name === finished_clubs[3]) ? name+" (Finished Kpatata)" : name }</motion.h3>
                    <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name}/>
                    <p>Year founded: {founded}</p>
                    <p>Phone: {phone}</p>
                </div>
                <div className="card-side card-side-back">
                    <section>
                        <h3>{tla}</h3>
                        <img src={image} alt={name}/>
                    </section>
                    <Link to={`/team/${id}`}>
                        <button style={custom_style} onClick={loadDetailHandler}>Click for more</button>
                    </Link>
                </div>
        </div>
        </StyledTeam> 
    )
};

const StyledTeam = styled(motion.div)`
    
    div {
        transition: all .8s;
        perspective: 150rem;
        --moz-perspective: 150rem;
        position: relative;
        height: 40rem;
        width: 30rem;
        margin-right: 5rem;
        @media (max-width: 56.25em) {
            height: 30rem;
            width: 30rem;
            margin-right: 0rem;
    }

    .card-side{
        transition: all .8s;
        height: 100%;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
        text-align: center;
        border-radius: 1rem;
        margin-right: 1rem;
        padding: 1rem 2rem;
        background: white; 
        position: absolute;
        top: 0;
        left: 0;
        width: 30rem;
        backface-visibility: hidden;
        transition: all .8s ease;

        @media (max-width: 56.25em) {
            padding: 1rem 1rem;
            height: 100%;
            width: 25rem;

    }

        button{
            cursor: pointer;    
            text-transform: uppercase;
            border: none;
            padding: 2.5rem 4rem;
            font-weight: bolder;
            font-size: 1.5rem;
            border-radius: 10rem;
            transition: all .2s; 
            text-shadow: 3px 2px rgba(0,0,0,0.2);
            box-shadow: 0 .5rem .5rem rgba(0,0,0,.2);

            :hover{
                transform: translateY(-.3rem);
                box-shadow: 0 1rem 2rem rgba(0,0,0,.2);
            }

            :active {
                transform: translateY(-.1rem);
                box-shadow: 0 5rem 1rem rgba(0,0,0,.2);

            }
        }
    
        &-front {
            /* background: green; */
            P {
                margin: 2rem 0;
                font-weight: bold;
            }
        }

        &-back {
            transform: rotateY(180deg);
            background: #EBF2FA;
            section {
                display: flex;
                justify-content: space-between;
                padding-bottom: 15rem;
                img {
                    width: 5rem;
                    height: 5rem;
                    
                }
            }

        }
    }

    &:hover .card-side-front{
        transform: rotateY(180deg);
    }
    &:hover .card-side-back{
        transform: rotateY(0);
    }
    img{
        width: 100%;
        height: 20rem;
        object-fit: contain;
        transition: transform 450ms;

        @media (max-width: 56.25em) {
                    width: 100%;
                    height: 12rem;
                }
    } 
}
`

export default Team;
