import React, {useState, useEffect} from 'react';
import styles from './RenderBracket.module.css';
import Teeball from '../Brackets/TeeBallBracket';
import CoachesPitch from '../Brackets/CoachesPitchBracket';
import MinorsBracket_9 from '../Brackets/9MinorsBracket';
import MinorsBracket_10 from '../Brackets/10MinorsBracket';
import MinorsBracket_11 from '../Brackets/11MinorsBracket';
import MajorBracket_12 from '../Brackets/12MajorsBracket';
import JuniorsBracket_14 from '../Brackets/14JuniorsBracket';
import SeniorBracket_16 from '../Brackets/16SeniorsBracket';

const RenderBracket = () => {
    const [bracket, setBracket] = useState("14U");
    const [tabState, setTabState] = useState("14U");

    function handleBracketChange(event){
        const division = event.target.id;
        setTabState(division);
        setBracket(division);
        console.log("Selected Bracket:", division);
        console.log(tabState);
    }
    
    
    

    function renderBracket() {
            console.log("Rendering Bracket:", bracket);
            switch(bracket) {
            case "TB":
                return <Teeball />;
            case 'CP':
                return <CoachesPitch />;
            case '9U':
                return <MinorsBracket_9 />;
            case '10U':
                return <MinorsBracket_10 />;
            case '11U':
                return <MinorsBracket_11 />;
            case '12U':
                return <MajorBracket_12 />;
            case '14U':
                return <JuniorsBracket_14 />;
            case '16U':
                return <SeniorBracket_16 />;
            default:
                return null;
            }
        }

            useEffect(() => {
                console.log("Bracket updated:", bracket);
            }, [bracket]);
            
    return (<>
        <div className={styles.main}>
            <div className={styles.bracketTabs}>
                <div>
                    {/* <button 
                            className={tabState === 'TB' ? `${styles.tabSelected}` : ""} 
                            id="TB" 
                            onClick={handleBracketChange}
                        >
                            Tee-Ball
                    </button>
                    <button 
                            className={tabState === 'CP' ? `${styles.tabSelected}` : ""} 
                            id="CP" 
                            onClick={handleBracketChange}
                        >
                            Coaches Pitch
                    </button>
                    <button 
                            className={tabState === '9U' ? `${styles.tabSelected}` : ""} 
                            id="9U" 
                            onClick={handleBracketChange}
                        >
                            9U Minors
                    </button>
                    <button 
                            className={tabState === '10U' ? `${styles.tabSelected}` : ""} 
                            id="10U" 
                            onClick={handleBracketChange}
                        >
                            10U Minors
                    </button>
                    <button 
                            className={tabState === '11U' ? `${styles.tabSelected}` : ""} 
                            id="11U" 
                            onClick={handleBracketChange}
                        >
                            11U Minors
                    </button>
                    <button 
                            className={tabState === '12U' ? `${styles.tabSelected}` : ""} 
                            id="12U" 
                            onClick={handleBracketChange}
                        >
                            12U Majors
                    </button> */}
                    <button 
                            className={tabState === '14U' ? `${styles.tabSelected}` : ""} 
                            id="14U" 
                            onClick={handleBracketChange}
                        >
                            14U Juniors
                    </button>
                    <button 
                            className={tabState === '16U' ? `${styles.tabSelected}` : ""} 
                            id="16U" 
                            onClick={handleBracketChange}
                        >
                            16U Seniors
                    </button>
                </div>
            </div>
            <div id='bracket'>
                    {renderBracket()}
            </div>
            
        </div>
    </>)
}

export default RenderBracket
