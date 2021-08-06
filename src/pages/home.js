import React, {useEffect} from 'react';
import TeamDetails from '../components/TeamDetails';

//REDUX
import {useDispatch, useSelector} from 'react-redux';
import { useLocation } from 'react-router';
import {loadTeams} from '../actions/teamsAction'
//Components
import Team from '../components/Team'; 
//Styling and Animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import Topscorer from '../components/Topscorer';

const Home = () => {
    //get current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTeams());
    }, [dispatch]);
    //Get data back
    const {eplTeams, laligaTeams, ligueOneTeams, bundesligaTeams, SerieATeams, topscorersEpl, topscorerLaliga, topscorerSerieA, topscorerLigueOne,topscorersBundesliga} = useSelector((state) => state.football);

    const year = new Date().getFullYear() - 1
    // console.log(topscorersEpl)
    return(
        <TeamList>
            <AnimateSharedLayout type="">
            <AnimatePresence>
                {pathId && <TeamDetails pathId={pathId}/>}
            </AnimatePresence>
            <div>
                <h2>Epl Teams</h2>
                <Teams>
                    {eplTeams.map((team) => (
                        <Team name={team.name} 
                        stadium={team.venue} 
                        founded={team.founded} 
                        phone={team.phone} 
                        id={team.id} 
                        image={team.crestUrl}
                        tla={team.tla}
                        website={team.website}                        
                        colours={team.clubColors}                        
                        email={team.email}                        
                        key={team.id}
                        />
                    ))}
                </Teams>
            </div>
            <div>
                <h2>LaLiga Teams</h2>
                <Teams>
                    {laligaTeams.map((team) => (
                        <Team name={team.name} 
                        stadium={team.venue} 
                        founded={team.founded} 
                        phone={team.phone} 
                        id={team.id} 
                        image={team.crestUrl}
                        tla={team.tla}
                        website={team.website}                        
                        colours={team.clubColors}                        
                        email={team.email}
                        key={team.id}
                        />
                    ))}
                </Teams>
            </div>
            <div>   
                <h2>Ligue One Teams</h2>
                <Teams>
                    {ligueOneTeams.map((team) => (
                        <Team name={team.name} 
                        stadium={team.venue} 
                        founded={team.founded} 
                        phone={team.phone} 
                        id={team.id} 
                        image={team.crestUrl}
                        tla={team.tla}
                        website={team.website}                        
                        colours={team.clubColors}                        
                        email={team.email}
                        key={team.id}
                        />
                    ))}
                </Teams>
            </div>
            <div>
                <h2>Bundesliga Teams</h2>
                <Teams>
                    {bundesligaTeams.map((team) => (
                        <Team name={team.name} 
                        stadium={team.venue} 
                        founded={team.founded} 
                        phone={team.phone} 
                        id={team.id} 
                        image={team.crestUrl}
                        tla={team.tla}
                        website={team.website}                        
                        colours={team.clubColors}                        
                        email={team.email}
                        key={team.id}
                        />
                    ))}
                </Teams>
            </div>
            <div>
                <h2>SerieA Teams</h2>
                <Teams>
                    {SerieATeams.map((team) => (
                        <Team name={team.name} 
                        stadium={team.venue} 
                        founded={team.founded} 
                        phone={team.phone} 
                        id={team.id} 
                        image={team.crestUrl}
                        tla={team.tla}
                        website={team.website}                        
                        colours={team.clubColors}                        
                        email={team.email}
                        key={team.id}
                        />
                    ))}
                </Teams>
            </div> 
            <Topscorers>
                <h2>Top Scorers {year}</h2>
                <div className="cards">
                    <div>  
                        <h3>EPL</h3> 
                        <Teams> 
                            <Topscorer 
                            name={topscorersEpl.player.name} 
                            image={topscorersEpl.player.photo}
                            age={topscorersEpl.player.age}
                            team={topscorersEpl.statistics[0].team.name}
                            goals={topscorersEpl.statistics[0].goals.total}
                            assist={topscorersEpl.statistics[0].goals.assists}
                            />
                        </Teams>
                    </div>
                    <div>  
                        <h3>Laliga</h3> 
                        <Teams> 
                            <Topscorer 
                            name={topscorerLaliga.player.name} 
                            image={topscorerLaliga.player.photo}
                            age={topscorerLaliga.player.age}
                            team={topscorerLaliga.statistics[0].team.name}
                            goals={topscorerLaliga.statistics[0].goals.total}
                            assist={topscorerLaliga.statistics[0].goals.assists}
                            />
                        </Teams>
                    </div>
                    <div>  
                        <h3>Seria A</h3> 
                        <Teams> 
                            <Topscorer 
                            name={topscorerSerieA.player.name} 
                            image={topscorerSerieA.player.photo}
                            age={topscorerSerieA.player.age}
                            team={topscorerSerieA.statistics[0].team.name}
                            goals={topscorerSerieA.statistics[0].goals.total}
                            assist={topscorerSerieA.statistics[0].goals.assists}
                            />
                        </Teams>
                    </div>
                    <div>  
                        <h3>Ligue One</h3> 
                        <Teams> 
                            <Topscorer 
                            name={topscorerLigueOne.player.name} 
                            image={topscorerLigueOne.player.photo}
                            age={topscorerLigueOne.player.age}
                            team={topscorerLigueOne.statistics[0].team.name}
                            goals={topscorerLigueOne.statistics[0].goals.total}
                            assist={topscorerLigueOne.statistics[0].goals.assists}
                            />
                        </Teams>
                    </div>
                    <div>  
                        <h3>Bundesliga</h3> 
                        <Teams> 
                            <Topscorer 
                            name={topscorersBundesliga.player.name} 
                            image={topscorersBundesliga.player.photo}
                            age={topscorersBundesliga.player.age}
                            team={topscorersBundesliga.statistics[0].team.name}
                            goals={topscorersBundesliga.statistics[0].goals.total}
                            assist={topscorersBundesliga.statistics[0].goals.assists}
                            />
                        </Teams>
                    </div>
                </div>
                
                
            </Topscorers> 
            </AnimateSharedLayout>           
        </TeamList>
    );
};

const TeamList = styled(motion.div)`
background-color: #25203a;
color: white;
    padding: 0rem 5rem;
    h2 {
        padding: 1rem 1rem;
    }
    div{
        
    }
`;
const Teams = styled(motion.div)`
    min-height: 80vh;
    display: flex;
    min-height: 100px;
    /* margin-right: 5rem; */
    /* padding: 5rem; */
        overflow-y: hidden;
        overflow-x: scroll;
        
     &::-webkit-scrollbar {
         display: none;
     }

    padding: 3rem 1rem;
`;

const Topscorers = styled(motion.div)`

     .cards {
    min-height: 80vh;
    display: flex;
    min-height: 100px;
    /* margin-right: 5rem; */
    /* padding: 5rem; */
        overflow-y: hidden;
        overflow-x: scroll;
        
     &::-webkit-scrollbar {
         display: none;
     }

    padding: 3rem 1rem;
     }

     h3 {
        padding: 0rem 1rem;
        font-size: 2rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: white;
    }
`

export default Home;

