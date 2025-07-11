import styles from './BracketEight-new.module.css'

function BracketEight(props){

    const {bracket, info:tournamentInfo} = props
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
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.teamThree}</span>
                                                                    <span className={styles.score}>{games.twoTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameTwo}</span>
                                                                    <span className={styles.name}>{games.gameTwoNext}</span>
                                                                    <span className={styles.time}>{games.gameTwoInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.teamFour}</span>
                                                                    <span className={styles.score}>{games.twoBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.teamFive}</span>
                                                                    <span className={styles.score}>{games.threeTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameThree}</span>
                                                                    <span className={styles.name}>{games.gameThreeNext}</span>
                                                                    <span className={styles.time}>{games.gameThreeInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.teamSix}</span>
                                                                    <span className={styles.score}>{games.threeBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.teamSeven}</span>
                                                                    <span className={styles.score}>{games.fourTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameFour}</span>
                                                                    <span className={styles.name}>{games.gameFourNext}</span>
                                                                    <span className={styles.time}>{games.gameFourInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.teamEight}</span>
                                                                    <span className={styles.score}>{games.fourBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colTwo}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.winnOne}</span>
                                                                    <span className={styles.score}>{games.fiveTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameFive}</span>
                                                                    <span className={styles.name}>{games.gameFiveNext}</span>
                                                                    <span className={styles.time}>{games.gameFiveInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.winnTwo}</span>
                                                                    <span className={styles.score}>{games.fiveBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.winnThree}</span>
                                                                    <span className={styles.score}>{games.sixTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameSix}</span>
                                                                    <span className={styles.name}>{games.gameSixNext}</span>
                                                                    <span className={styles.time}>{games.gameSixInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.winnFour}</span>
                                                                    <span className={styles.score}>{games.sixBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colThree}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.winnFive}</span>
                                                                    <span className={styles.score}>{games.elevenTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameEleven}</span>
                                                                    <span className={styles.name}>{games.gameElevenNext}</span>
                                                                    <span className={styles.time}>{games.gameElevenInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.winnSix}</span>
                                                                    <span className={styles.score}>{games.elevenBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colFour}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}></div>
                                                                <div className={styles.bottomTeam}></div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colFive}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.winnEleven}</span>
                                                                    <span className={styles.score}>{games.fourteenTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameFourteen}</span>
                                                                    <span className={styles.name}>{games.gameFourteenNext}</span>
                                                                    <span className={styles.time}>{games.gameFourteenInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.winnThirteen}</span>
                                                                    <span className={styles.score}>{games.fourteenBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colChamp}>
                                                            <div className={styles.line}>
                                                                <div className={styles.team}>{games.winnChampion}</div>
                                                                <div className={styles.topTeam}>Champion</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className={styles.loserBracket}>
                                                        <div className={styles.colOne}>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.loserOne}</span>
                                                                    <span className={styles.score}>{games.sevenTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameSeven}</span>
                                                                    <span className={styles.name}>{games.gameSevenNext}</span>
                                                                    <span className={styles.time}>{games.gameSevenInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.loserTwo}</span>
                                                                    <span className={styles.score}>{games.sevenBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                            <div className={styles.game}>
                                                                <div className={styles.topTeam}>
                                                                    <span className={styles.name}>{games.loserThree}</span>
                                                                    <span className={styles.score}>{games.eightTopScore}</span>
                                                                </div> 
                                                                <div className={styles.gameInfo}>
                                                                    <span className={styles.name}>{games.gameEight}</span>
                                                                    <span className={styles.name}>{games.gameEightNext}</span>
                                                                    <span className={styles.time}>{games.gameEightInfo}</span>
                                                                </div> 
                                                                <div className={styles.bottomTeam}>
                                                                    <span className={styles.name}>{games.loserFour}</span>
                                                                    <span className={styles.score}>{games.eightBottomScore}</span>
                                                                </div>           
                                                            </div>
                                                        </div>
                                                        <div className={styles.colTwo}>
                                                                <div className={`${styles.bye} ${styles.game9}`}>
                                                                    <div className={styles.topTeam}>
                                                                        <span className={styles.name}>{games.loserSix}</span>
                                                                        <span className={styles.score}>{games.nineTopScore}</span>
                                                                    </div> 
                                                                    <div className={styles.gameInfo}>
                                                                        <span className={styles.name}>{games.gameNine}</span>
                                                                        <span className={styles.name}>{games.gameNineNext}</span>
                                                                        <span className={styles.time}>{games.gameNineInfo}</span>
                                                                    </div> 
                                                                    <div className={styles.bottomTeam}>
                                                                        <span className={styles.name}>{games.winnSeven}</span>
                                                                        <span className={styles.score}>{games.nineBottomScore}</span>
                                                                    </div>           
                                                                </div>
                                                                <div className={styles.bye}>
                                                                    <div className={styles.topTeam}>
                                                                        <span className={styles.name}>{games.winnEight}</span>
                                                                        <span className={styles.score}>{games.tenTopScore}</span>
                                                                    </div> 
                                                                    <div className={styles.gameInfo}>
                                                                        <span className={styles.name}>{games.gameTen}</span>
                                                                        <span className={styles.name}>{games.gameTenNext}</span>
                                                                        <span className={styles.time}>{games.gameTenInfo}</span>
                                                                    </div> 
                                                                    <div className={styles.bottomTeam}>
                                                                        <span className={styles.name}>{games.loserFive}</span>
                                                                        <span className={styles.score}>{games.tenBottomScore}</span>
                                                                    </div>           
                                                                </div>
                                                        </div>
                                                        <div className={styles.colThree}>
                                                                <div className={styles.game}>
                                                                    <div className={styles.topTeam}>
                                                                        <span className={styles.name}>{games.winnNine}</span>
                                                                        <span className={styles.score}>{games.twelveTopScore}</span>
                                                                    </div> 
                                                                    <div className={styles.gameInfo}>
                                                                        <span className={styles.name}>{games.gameTwelve}</span>
                                                                        <span className={styles.name}>{games.gameTwelveNext}</span>
                                                                        <span className={styles.time}>{games.gameTwelveInfo}</span>
                                                                    </div>
                                                                    <div className={styles.bottomTeam}>
                                                                        <span className={styles.name}>{games.winnTen}</span>
                                                                        <span className={styles.score}>{games.twelveBottomScore}</span>
                                                                    </div>           
                                                                </div>
                                                        </div>
                                                        <div className={styles.colFour}>
                                                                <div className={styles.bye}>
                                                                    <div className={styles.topTeam}>
                                                                        <span className={styles.name}>{games.loserEleven}</span>
                                                                        <span className={styles.score}>{games.thirteenTopScore}</span>
                                                                    </div> 
                                                                    <div className={styles.gameInfo}>
                                                                        <span className={styles.name}>{games.gameThirteen}</span>
                                                                        <span className={styles.name}>{games.gameThirteenNext}</span>
                                                                        <span className={styles.time}>{games.gameThirteenInfo}</span>
                                                                    </div>
                                                                    <div className={styles.bottomTeam}>
                                                                        <span className={styles.name}>{games.winnTwelve}</span>
                                                                        <span className={styles.score}>{games.thirteenBottomScore}</span>
                                                                    </div>           
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>)

    const createBracketTitle = tournamentInfo.map((titles, index) =>     
        <div className={styles.bracketTitle} key={`title-${index}`}>
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

export default BracketEight