import styles from './BracketSix.module.css';

// Reusable Game component to reduce repetition
const Game = ({ topTeam, topScore, bottomTeam, bottomScore, gameName, gameNext, gameInfo, isBye = false }) => (
  <div className={isBye ? styles.bye : styles.game}>
    <div className={styles.topTeam}>
      <span className={styles.name}>{topTeam}</span>
      <span className={styles.score}>{topScore}</span>
    </div>
    <div className={styles.gameInfo}>
      <span className={styles.name}>{gameName}</span>
      <span className={styles.name}>{gameNext}</span>
      <span className={styles.time}>{gameInfo}</span>
    </div>
    <div className={styles.bottomTeam}>
      <span className={styles.name}>{bottomTeam}</span>
      <span className={styles.score}>{bottomScore}</span>
    </div>
  </div>
);

// Reusable BracketTitle component
const BracketTitle = ({ division, site, address, phone, director, next, nextAddress }) => (
  <div className={styles.bracketTitle}>
    <div className={styles.division}>
      <span className={styles.label}>Division: </span>
      <span className={styles.name}>{division}</span>
    </div>
    <div className={styles.label}>
      Site: <span className={styles.name}>{site}</span>
    </div>
    <div className={styles.label}>
      Address: <span className={styles.name}>{address}</span>
    </div>
    <div className={styles.label}>
      Update Phone: <span className={styles.name}>{phone}</span>
    </div>
    <div className={styles.label}>
      Tournament Director: <span className={styles.name}>{director}</span>
    </div>
    <div className={styles.label}>
      Next Level: <span className={styles.name}>{next}</span>
    </div>
    <div className={styles.name}>{nextAddress}</div>
  </div>
);

function BracketSix({ bracket, info: tournamentInfo }) {
  // Transform bracket data into an array of game objects for easier mapping
  const gamesData = bracket.map((game, index) => [
    {
      key: `game1-${index}`,
      topTeam: game.teamOne,
      topScore: game.oneTopScore,
      bottomTeam: game.teamTwo,
      bottomScore: game.oneBottomScore,
      gameName: game.gameOne,
      gameNext: game.gameOneNext,
      gameInfo: game.gameOneInfo,
    },
    {
      key: `game2-${index}`,
      topTeam: game.teamThree,
      topScore: game.twoTopScore,
      bottomTeam: game.teamFour,
      bottomScore: game.twoBottomScore,
      gameName: game.gameTwo,
      gameNext: game.gameTwoNext,
      gameInfo: game.gameTwoInfo,
    },
    {
      key: `game3-${index}`,
      topTeam: game.teamFive,
      topScore: game.threeTopScore,
      bottomTeam: game.winnOne,
      bottomScore: game.threeBottomScore,
      gameName: game.gameThree,
      gameNext: game.gameThreeNext,
      gameInfo: game.gameThreeInfo,
    },
    {
      key: `game4-${index}`,
      topTeam: game.winnTwo,
      topScore: game.fourTopScore,
      bottomTeam: game.teamSix,
      bottomScore: game.fourBottomScore,
      gameName: game.gameFour,
      gameNext: game.gameFourNext,
      gameInfo: game.gameFourInfo,
      isBye: true,
    },
    {
      key: `game5-${index}`,
      topTeam: game.loserOne,
      topScore: game.fiveTopScore,
      bottomTeam: game.loserFour,
      bottomScore: game.fiveBottomScore,
      gameName: game.gameFive,
      gameNext: game.gameFiveNext,
      gameInfo: game.gameFiveInfo,
    },
    {
      key: `game6-${index}`,
      topTeam: game.loserTwo,
      topScore: game.sixTopScore,
      bottomTeam: game.loserThree,
      bottomScore: game.sixBottomScore,
      gameName: game.gameSix,
      gameNext: game.gameSixNext,
      gameInfo: game.gameSixInfo,
      isBye: true,
    },
    {
      key: `game7-${index}`,
      topTeam: game.winnThree,
      topScore: game.sevenTopScore,
      bottomTeam: game.winnFour,
      bottomScore: game.sevenBottomScore,
      gameName: game.gameSeven,
      gameNext: game.gameSevenNext,
      gameInfo: game.gameSevenInfo,
    },
    {
      key: `game8-${index}`,
      topTeam: game.winnFive,
      topScore: game.eightTopScore,
      bottomTeam: game.winnSix,
      bottomScore: game.eightBottomScore,
      gameName: game.gameEight,
      gameNext: game.gameEightNext,
      gameInfo: game.gameEightInfo,
      isBye: true,
    },
    {
      key: `game9-${index}`,
      topTeam: game.loserSeven,
      topScore: game.nineTopScore,
      bottomTeam: game.winnEight,
      bottomScore: game.nineBottomScore,
      gameName: game.gameNine,
      gameNext: game.gameNineNext,
      gameInfo: game.gameNineInfo,
      isBye: true,
    },
    {
      key: `game10-${index}`,
      topTeam: game.winnSeven,
      topScore: game.tenTopScore,
      bottomTeam: game.winnNine,
      bottomScore: game.tenBottomScore,
      gameName: game.gameTen,
      gameNext: game.gameTenNext,
      gameInfo: game.gameTenInfo,
    },
  ]);

  return (
    <div className={styles.bracketInfo}>
      {/* Render title, assuming tournamentInfo is an array with one object */}
      {tournamentInfo[0] && <BracketTitle {...tournamentInfo[0]} />}

      {/* Render brackets */}
      {gamesData.map((bracketGames, bracketIndex) => (
        <div className={styles.fullBracket} key={`bracket-${bracketIndex}`}>
          {/* Winner Bracket */}
          <div className={styles.winnerBracket}>
            <div className={styles.colOne}>
              <Game {...bracketGames[0]} />
              <Game {...bracketGames[1]} />
            </div>
            <div className={styles.colTwo}>
              <Game {...bracketGames[2]} />
              <Game {...bracketGames[3]} />
            </div>
            <div className={styles.colThree}>
              <Game {...bracketGames[6]} />
            </div>
            <div className={styles.colFour}>
              <Game {...bracketGames[9]} />
            </div>
            <div className={styles.colChamp}>
              <div className={styles.line}>
                <div className={styles.team}>{bracket[bracketIndex].winnChampion}</div>
                <div className={styles.topTeam}>Champion</div>
              </div>
            </div>
          </div>

          {/* Loser Bracket */}
          <div className={styles.loserBracket}>
            <div className={styles.colOne}>
              <Game {...bracketGames[4]} />
              <Game {...bracketGames[5]} />
            </div>
            <div className={styles.colTwo}>
              <Game {...bracketGames[7]} />
            </div>
            <div className={styles.colThree}>
              <Game {...bracketGames[8]} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BracketSix;
