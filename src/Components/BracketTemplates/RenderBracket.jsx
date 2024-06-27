import React, {useState, useEffect} from 'react';
import styles from './RenderBracket.module.css';
import Teeball from '../Brackets/TeeBallBracket';
import CoachesPitch from '../Brackets/CoachesPitchBracket';
import MinorsBracket_9 from '../Brackets/9MinorsBracket';
import MinorsBracket_10 from '../Brackets/10MinorsBracket';
import MinorsBracket_11 from '../Brackets/11MinorsBracket';
import MajorBracket_12 from '../Brackets/12MajorsBracket';

const RenderBracket = () => {
    const [bracket, setBracket] = useState("TB");
    const [tabState, setTabState] = useState("TB");

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
            default:
                return null;
            }
        }

            useEffect(() => {
                console.log("Bracket updated:", bracket);
            }, [bracket]);
            
    return (<>
        <div className="main">
            <div className="bracket-tabs">
                <div>
                    <button 
                            className={tabState === 'TB' ? styles['tab-selected'] : ""} 
                            id="TB" 
                            onClick={handleBracketChange}
                        >
                            Tee-Ball
                    </button>
                    <button 
                            className={tabState === 'CP' ? styles['tab-selected'] : ""} 
                            id="CP" 
                            onClick={handleBracketChange}
                        >
                            Coaches Pitch
                    </button>
                    <button 
                            className={tabState === '9U' ? styles['tab-selected'] : ""} 
                            id="9U" 
                            onClick={handleBracketChange}
                        >
                            9U Minors
                    </button>
                    <button 
                            className={tabState === '10U' ? styles['tab-selected'] : ""} 
                            id="10U" 
                            onClick={handleBracketChange}
                        >
                            10U Minors
                    </button>
                    <button 
                            className={tabState === '11U' ? styles['tab-selected'] : ""} 
                            id="11U" 
                            onClick={handleBracketChange}
                        >
                            11U Minors
                    </button>
                    <button 
                            className={tabState === '12U' ? styles['tab-selected'] : ""} 
                            id="12U" 
                            onClick={handleBracketChange}
                        >
                            12U Majors
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
