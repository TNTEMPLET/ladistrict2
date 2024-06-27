import styles from './BracketThree.module.css';

function BracketThree(props){
    const {bracket, info: tournamentInfo} = props
    const createBracket = bracket.map((games, index) =>  <div className={styles.fullBracket} key={`bracket-${index}`}>
                                                    <div className={styles.winnerBracket}>
                                                        <div className={styles.colOne}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.teamOne}</span>
                                                                    <span className={styles.score}>{games.oneTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameOne}</span>
                                                                    <span className={styles.name}>{games.gameOneNext}</span>
                                                                    <span className={styles.time}>{games.gameOneInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.teamTwo}</span>
                                                                    <span className={styles.score}>{games.oneBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colTwo}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.winnOne}</span>
                                                                    <span className={styles.score}>{games.twoTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameTwo}</span>
                                                                    <span className={styles.name}>{games.gameTwoNext}</span>
                                                                    <span className={styles.time}>{games.gameTwoInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.teamThree}</span>
                                                                    <span className={styles.score}>{games.twoBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.colThree}>
                                                        <div className={styles.game}>
                                                            <div className={styles.topTeam}>
                                                                <span className={styles.name}>{games.winnTwo}</span>
                                                                <span className={styles.score}>{games.fourTopScore}</span>
                                                            </div> 
                                                            <div className={styles.gameInfo}>
                                                                <span className={styles.name}>{games.gameFour}</span>
                                                                <span className={styles.name}>{games.gameFourNext}</span>
                                                                <span className={styles.time}>{games.gameFourInfo}</span>
                                                            </div> 
                                                            <div className={styles.bottomTeam}>
                                                                <span className={styles.name}>{games.winnThree}</span>
                                                                <span className={styles.score}>{games.fourBottomScore}</span>
                                                            </div>           
                                                        </div>
                                                    </div>
                                                    <div className={styles.loserBracket}>
                                                        <div className={styles.colBye}>
                                                            <div className={styles.bye}>
                                                                <div className={styles.team}>
                                                                    <span className={styles.name}>{games.loserOne}</span>
                                                                    <span className={styles.score}>{games.threeTopScore}</span>
                                                                </div>  
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameThree}</span>
                                                                    <span className={styles.time}>{games.gameThreeInfo}</span>
                                                                </div>
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.loserTwo}</span>
                                                                    <span className={styles.score}>{games.threeBottomScore}</span>
                                                                </div>        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={styles.colFour}>
                                                        <div className={styles.bye}>
                                                        <div className={styles.topTeam}>
                                                                <span className={styles.name}>{games.winnFour}</span>
                                                                <span className={styles.score}>{games.fiveTopScore}</span>
                                                            </div>  
                                                            <div className={styles.gameInfo}>
                                                                <span className={styles.name}>{games.gameFive}</span>
                                                                <span className={styles.time}>{games.gameFiveInfo}</span>
                                                                <span className={styles.more}>{games.gameFiveMoreInf}</span>
                                                            </div>
                                                            <div className={styles.bottomTeam}>
                                                                <span className={styles.name}>{games.loserFour}</span>
                                                                <span className={styles.score}>{games.fiveBottomScore}</span>
                                                            </div>         
                                                        </div>
                                                    </div>
                                                    <div className={styles.colChamp}>
                                                   
                                                        <div className={styles.line}>
                                                            <div className={styles.team}>{games.winnChampion}</div>
                                                            <div className={styles.topTeam}>Champion</div>
                                                        </div>
                                                    </div>
                                                </div>)

    const createBracketTitle = tournamentInfo.map((titles, index) =>     <div className={styles.bracketTitle} key={`titles-${index}`}>
                                                                    <div className={styles.division}>
                                                                        <div className={styles.label}>Division: </div>
                                                                        <div className={styles.name}>{titles.division}</div>
                                                                    </div>
                                                                    <div className={styles.label}>
                                                                        Site: 
                                                                        <div className={styles.name}>{titles.site}</div>
                                                                    </div> 
                                                                    <div className={styles.label}>
                                                                        Address:
                                                                        <div className={styles.name}>{titles.address}</div>
                                                                    </div>
                                                                    <div className={styles.label}>
                                                                        Update Phone: 
                                                                        <div className={styles.name}>{titles.phone}</div>
                                                                    </div>
                                                                    <div className={styles.label}>
                                                                        Tournament Director: 
                                                                        <div className={styles.name}>{titles.director}</div>
                                                                    </div>
                                                                    <div className={styles.label}>
                                                                        Next Level: 
                                                                        <div className={styles.name}>{titles.next}</div>
                                                                    </div>
                                                                        <div className={styles.name}>{titles.nextAddress}</div>
                                                                </div>);

return  (   <>
                <div className={styles.bracketInfo}>
                    {createBracketTitle}
                    {createBracket}
                </div>
            </>);
}

export default BracketThree