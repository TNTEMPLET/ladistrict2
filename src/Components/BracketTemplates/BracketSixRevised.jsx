import React from 'react';
import styles from './BracketSix.module.css';

// Reusable Game component
const Game = ({ topTeam, topScore, bottomTeam, bottomScore, gameName, gameInfo }) => (
  <div className={styles.game}>
    <div className={styles.topTeam}>
      <span className={styles.name}>{topTeam}</span>
      <span className={styles.score}>({topScore})</span>
    </div>
    <div className={styles.gameInfo}>
      <span>{gameName}</span>
      <span>{gameInfo}</span>
    </div>
    <div className={styles.bottomTeam}>
      <span className={styles.name}>{bottomTeam}</span>
      <span className={styles.score}>({bottomScore})</span>
    </div>
    {/* Connector to next game */}
    <div className={styles.connector}></div>
  </div>
);

// Reusable BracketTitle component
const BracketTitle = ({ division, site, address, phone, director, next, nextAddress }) => (
  <div className={styles.bracketTitle}>
    <div className={styles.infoItem}>
      <span className={styles.label}>Division:</span> {division}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Site:</span> {site}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Address:</span> {address}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Phone:</span> {phone}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Director:</span> {director}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Next Level:</span> {next}
    </div>
    <div className={styles.infoItem}>
      <span className={styles.label}>Next Address:</span> {nextAddress}
    </div>
  </div>
);

function BracketSix({ bracket, info: tournamentInfo }) {
  // Transform bracket data for 6-team double-elimination
  const gamesData = bracket.map((game, index) => [
    // Winner's Bracket: Round 1
    { key: `game1-${index}`, topTeam: game.teamOne, topScore: game.oneTopScore, bottomTeam: game.teamTwo, bottomScore: game.oneBottomScore, gameName: game.gameOne, gameInfo: game.gameOneInfo },
    { key: `game2-${index}`, topTeam: game.teamThree, topScore: game.twoTopScore, bottomTeam: game.teamFour, bottomScore: game.twoBottomScore, gameName: game.gameTwo, gameInfo: game.gameTwoInfo },
    { key: `game3-${index}`, topTeam: game.teamFive, topScore: game.threeTopScore, bottomTeam: game.teamSix, bottomScore: game.threeBottomScore, gameName: game.gameThree, gameInfo: game.gameThreeInfo },
    // Winner's Bracket: Round 2
    { key: `game4-${index}`, topTeam: game.winnOne, topScore: game.fourTopScore, bottomTeam: game.winnTwo, bottomScore: game.fourBottomScore, gameName: game.gameFour, gameInfo: game.gameFourInfo },
    // Loser's Bracket: Round 1
    { key: `game5-${index}`, topTeam: game.loserOne, topScore: game.fiveTopScore, bottomTeam: game.loserThree, bottomScore: game.fiveBottomScore, gameName: game.gameFive, gameInfo: game.gameFiveInfo },
    { key: `game6-${index}`, topTeam: game.loserTwo, topScore: game.sixTopScore, bottomTeam: game.loserFour, bottomScore: game.sixBottomScore, gameName: game.gameSix, gameInfo: game.gameSixInfo },
    // Loser's Bracket: Round 2
    { key: `game7-${index}`, topTeam: game.winnFive, topScore: game.sevenTopScore, bottomTeam: game.winnSix, bottomScore: game.sevenBottomScore, gameName: game.gameSeven, gameInfo: game.gameSevenInfo },
    // Championship
    { key: `game8-${index}`, topTeam: game.winnFour, topScore: game.eightTopScore, bottomTeam: game.winnSeven, bottomScore: game.eightBottomScore, gameName: game.gameEight, gameInfo: game.gameEightInfo },
  ]);

  return (
    <div className={styles.bracketInfo}>
      {/* Render title */}
      {tournamentInfo[0] && <BracketTitle {...tournamentInfo[0]} />}

      {/* Render brackets */}
      {gamesData.map((bracketGames, bracketIndex) => (
        <div key={`bracket-${bracketIndex}`} className={styles.fullBracket}>
          {/* Winner's Bracket */}
          <div className={styles.winnerBracket}>
            <h3 className={styles.bracketHeader}>Winner's Bracket</h3>
            <div className={styles.bracketGrid}>
              {/* Round 1 */}
              <div className={styles.column}>
                <Game {...bracketGames[0]} />
                <Game {...bracketGames[1]} />
                <Game {...bracketGames[2]} />
              </div>
              {/* Round 2 */}
              <div className={styles.column}>
                <Game {...bracketGames[3]} />
              </div>
              {/* Championship */}
              <div className={styles.column}>
                <Game {...bracketGames[7]} />
                <div className={styles.champion}>
                  <div className={styles.championName}>{bracket[bracketIndex].winnChampion}</div>
                  <div className={styles.championLabel}>Champion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Loser's Bracket */}
          <div className={styles.loserBracket}>
            <h3 className={styles.bracketHeader}>Loser's Bracket</h3>
            <div className={styles.bracketGrid}>
              {/* Round 1 */}
              <div className={styles.column}>
                <Game {...bracketGames[4]} />
                <Game {...bracketGames[5]} />
              </div>
              {/* Round 2 */}
              <div className={styles.column}>
                <Game {...bracketGames[6]} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BracketSix;
