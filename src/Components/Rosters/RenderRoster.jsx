import React, {useState, useEffect} from 'react';
import styles from './RosterTemplate.module.css';
import Teeball from '../Rosters/TeeBallRoster';
import CoachesPitch from '../Rosters/CoachesPitchRoster';
import MinorsRoster_9 from '../Rosters/9MinorsRoster';
import MinorsRoster_10 from '../Rosters/10MinorsRoster';
import MinorsRoster_11 from '../Rosters/11MinorsRoster';
import MajorRoster_12 from '../Rosters/12MajorsRoster';
import JuniorsRoster_14 from './14JuniorRoster';
import SeniorRoster_16 from './16SeniorRoster';

const RenderRoster = () => {
    const [roster, setRoster] = useState("14U");
    const [tabState, setTabState] = useState("14U");

    function handleRosterChange(event){
        const division = event.target.id;
        setTabState(division);
        setRoster(division);
        console.log("Selected Roster:", division);
        console.log(tabState);
    }
    
    function renderRoster() {
            console.log("Rendering Roster:", roster);
            switch(roster) {
            case "TB":
                return <Teeball />;
            case 'CP':
                return <CoachesPitch />;
            case '9U':
                return <MinorsRoster_9 />;
            case '10U':
                return <MinorsRoster_10 />;
            case '11U':
                return <MinorsRoster_11 />;
            case '12U':
                return <MajorRoster_12 />;
            case '14U':
                return <JuniorsRoster_14 />;
            case '16U':
                return <SeniorRoster_16 />;
            default:
                return null;
            }
        }

            useEffect(() => {
                console.log("Roster updated:", roster);
            }, [roster]);
            
    return (<>
        <div className={styles.main}>
            <div className={styles.rosterTabs}>
                <div>
                    {/* <button 
                            className={tabState === 'TB' ? `${styles.tabSelected}` : ""} 
                            id="TB" 
                            onClick={handleRosterChange}
                        >
                            Tee-Ball
                    </button>
                    <button 
                            className={tabState === 'CP' ? `${styles.tabSelected}` : ""} 
                            id="CP" 
                            onClick={handleRosterChange}
                        >
                            Coaches Pitch
                    </button>
                    <button 
                            className={tabState === '9U' ? `${styles.tabSelected}` : ""} 
                            id="9U" 
                            onClick={handleRosterChange}
                        >
                            9U Minors
                    </button>
                    <button 
                            className={tabState === '10U' ? `${styles.tabSelected}` : ""} 
                            id="10U" 
                            onClick={handleRosterChange}
                        >
                            10U Minors
                    </button>
                    <button 
                            className={tabState === '11U' ? `${styles.tabSelected}` : ""} 
                            id="11U" 
                            onClick={handleRosterChange}
                        >
                            11U Minors
                    </button>
                    <button 
                            className={tabState === '12U' ? `${styles.tabSelected}` : ""} 
                            id="12U" 
                            onClick={handleRosterChange}
                        >
                            12U Majors
                    </button> */}
                    <button 
                            className={tabState === '14U' ? `${styles.tabSelected}` : ""} 
                            id="14U" 
                            onClick={handleRosterChange}
                        >
                            14U Juniors
                    </button>
                    <button 
                            className={tabState === '16U' ? `${styles.tabSelected}` : ""} 
                            id="16U" 
                            onClick={handleRosterChange}
                        >
                            16U Seniors
                    </button>
                </div>
            </div>
            <div id='roster'>
                    {renderRoster()}
            </div>
            
        </div>
    </>)
}

export default RenderRoster
