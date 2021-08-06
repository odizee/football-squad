import React, {useEffect} from 'react'

//REDUX
import {useSelector} from 'react-redux'

//Styling and Animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

import {useHistory} from 'react-router-dom';

function TeamDetails({image, pathId}) {
    const history = useHistory();
    //Exit Detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }

    useEffect(() => {
    return () => {
            document.body.style.overflow = 'auto';
        }
    }, [history]);

    const {team, isLoading} = useSelector((state) => state.detail)


      const teams = team.squad && team.squad.map((data) => data && data.name)

      console.log(teams);

      
    
    // console.log(players)

    return (
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}> 
        
        <div className='x-top'><p className="shadow x">x</p></div>
            <Detail  layoutId={pathId}>
                <Stats>
                   <div className="heading">
                        <div className="heading-sub">
                            <div className="name">
                                <motion.h3 layoutId={`title ${pathId}`} className="name">{team.name}</motion.h3>
                                <p className="venue">{team.venue}</p>
                            </div>
                            <Media>
                                <motion.img layoutId={`image ${pathId}`} src={team.crestUrl} alt={team.name} />
                            </Media>
                        </div>
                    </div>
                    <Info>
                        <h3>Squad</h3>
                        <Squad>{team.squad.map((data) => (
                            <div className="player">
                                <div className="player-name">
                                    <span>{data.name.charAt(0)}</span>
                                    <h3 key={data.id}>{data.name === "Kai Havertz" ? "Kai Flopvertz" : data.name}</h3>
                                </div>
                                <p key={data.id}><span>Position: </span>{data.position}</p>
                                <p key={data.id}><span>Number: </span> {data.shirtNumber}</p>
                                <p key={data.id}><span>Country: </span>{data.nationality}</p>
                            </div>
                            
                        ))}
                        </Squad>
                    </Info>
                </Stats>
            </Detail>
        </CardShadow>
        )}
        </>
    )
};

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    .x-top {
        position: relative;

        .x{
        position: absolute;
        right: 10px;
        background-color: red;
        font-size: 2rem;
        cursor: pointer;
        color: white;
        z-index: 10;
        border-radius: 50rem;
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }
    }
    
    &::-webkit-scrollbar {
        width: .5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar {
        background: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    background: white;
    position: absolute;
    left: 10%;
    /* margin-left: 15rem;     */
    color: black;
    
`;

const Stats = styled(motion.div)`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    

    .heading {
        -webkit-box-shadow: 0px .1px 5px #46444e9f;
        -moz-box-shadow: 0px .1px 5px #46444e9f;
        box-shadow: 0px .1px 5px #46444e9f;    
    }
    .heading-sub {
        
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 5rem;
        
        .name {

        }
        img{
        display: block;
        width: 30%;
    }
    }

    .name {
        font-size: 4rem;

    }

    .venue {
        font-size: 2rem;
    }
    
`;

const Info = styled(motion.div)`
    text-align: center;
    padding: 2rem 5rem;

    h3 {
        font-size: 3rem;
    }

    
`

const Squad = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly; 
    @media (max-width: 40em) {
            justify-content: center; 
            flex-direction: column;
            padding: 0 2rem;
        }
    
    
    .player {
        text-align: justify;
        background-color: white;
        width: 30%;
        padding: 3rem;
        border-radius: .8rem;
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.2);
        margin-bottom: 3rem;
        margin-right: 3rem;

        @media (max-width: 56.25em) {
            width: 40%;
        }

        @media (max-width: 40em) {
            width: 100%;
        }

        h3 {
            font-size: 1.5rem;
        }

        p {
            padding: 1rem 0;
            font-weight: bolder;

            span {
                font-size: 1.5rem;
                font-style: italic;
                font-family: monospace;
            }
        }

        .player-name {
            display: flex;
            align-items: center;

            span {
                margin-right: 1rem;
                background-color: #25203abe;
                width: 3rem;
                height: 3rem;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 100%;
                color: white;
                box-shadow: 1px 1px #645b5b91;
                font-weight: bolder;
            }
        }
        
    }

`
const Media = styled(motion.div)`
    max-width: 40%;
    display: flex;
    justify-content: flex-end;
img{
        /* width: 100%; */
        /* height: 40rem; */
        /* object-fit: cover; */
    }
`

export default TeamDetails;
