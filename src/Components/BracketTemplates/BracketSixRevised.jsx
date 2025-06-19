import React from 'react';

// Using CDN-hosted Tailwind CSS for styling (per guidelines)
const TailwindCDN = () => (
  <link
    href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
    rel="stylesheet"
  />
);

// Reusable Game component
const Game = ({ topTeam, topScore, bottomTeam, bottomScore, gameName, gameInfo, isBye = false }) => (
  <div className={`p-4 bg-white border rounded-lg shadow-sm ${isBye ? 'opacity-75' : ''} mb-4 relative`}>
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-800">{topTeam}</span>
      <span className="text-gray-600">{topScore}</span>
    </div>
    <div className="text-center text-sm text-gray-500 my-2">
      <div>{gameName}</div>
      <div>{gameInfo}</div>
    </div>
    <div className="flex justify-between items-center">
      <span className="font-bold text-gray-800">{bottomTeam}</span>
      <span className="text-gray-600">{bottomScore}</span>
    </div>
    {/* Connector line to next game (simplified) */}
    <div className="absolute top-1/2 right-0 w-8 h-0.5 bg-gray-400 -mr-8"></div>
  </div>
);

// Reusable BracketTitle component
const BracketTitle = ({ division, site, address, phone, director, next, nextAddress }) => (
  <div className="mb-8 p-4 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold text-gray-800 mb-2">Tournament Info</h2>
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div><span className="font-semibold">Division:</span> {division}</div>
      <div><span className="font-semibold">Site:</span> {site}</div>
      <div><span className="font-semibold">Address:</span> {address}</div>
      <div><span className="font-semibold">Phone:</span> {phone}</div>
      <div><span className="font-semibold">Director:</span> {director}</div>
      <div><span className="font-semibold">Next Level:</span> {next}</div>
      <div className="col-span-2"><span className="font-semibold">Next Address:</span> {nextAddress}</div>
    </div>
  </div>
);

function BracketSix({ bracket, info: tournamentInfo }) {
  // Transform bracket data into a 6-team double-elimination structure
  const gamesData = bracket.map((game, index) => [
    // Winner's Bracket: Round 1
    {
      key: `game1-${index}`,
      topTeam: game.teamOne,
      topScore: game.oneTopScore,
      bottomTeam: game.teamTwo,
      bottomScore: game.oneBottomScore,
      gameName: game.gameOne,
      gameInfo: game.gameOneInfo,
    },
    {
      key: `game2-${index}`,
      topTeam: game.teamThree,
      topScore: game.twoTopScore,
      bottomTeam: game.teamFour,
      bottomScore: game.twoBottomScore,
      gameName: game.gameTwo,
      gameInfo: game.gameTwoInfo,
    },
    {
      key: `game3-${index}`,
      topTeam: game.teamFive,
      topScore: game.threeTopScore,
      bottomTeam: game.teamSix,
      bottomScore: game.threeBottomScore,
      gameName: game.gameThree,
      gameInfo: game.gameThreeInfo,
    },
    // Winner's Bracket: Round 2
    {
      key: `game4-${index}`,
      topTeam: game.winnOne,
      topScore: game.fourTopScore,
      bottomTeam: game.winnTwo,
      bottomScore: game.fourBottomScore,
      gameName: game.gameFour,
      gameInfo: game.gameFourInfo,
    },
    // Loser's Bracket: Round 1
    {
      key: `game5-${index}`,
      topTeam: game.loserOne,
      topScore: game.fiveTopScore,
      bottomTeam: game.loserThree,
      bottomScore: game.fiveBottomScore,
      gameName: game.gameFive,
      gameInfo: game.gameFiveInfo,
    },
    {
      key: `game6-${index}`,
      topTeam: game.loserTwo,
      topScore: game.sixTopScore,
      bottomTeam: game.loserFour,
      bottomScore: game.sixBottomScore,
      gameName: game.gameSix,
      gameInfo: game.gameSixInfo,
    },
    // Loser's Bracket: Round 2
    {
      key: `game7-${index}`,
      topTeam: game.winnFive,
      topScore: game.sevenTopScore,
      bottomTeam: game.winnSix,
      bottomScore: game.sevenBottomScore,
      gameName: game.gameSeven,
      gameInfo: game.gameSevenInfo,
    },
    // Championship
    {
      key: `game8-${index}`,
      topTeam: game.winnFour,
      topScore: game.eightTopScore,
      bottomTeam: game.winnSeven,
      bottomScore: game.eightBottomScore,
      gameName: game.gameEight,
      gameInfo: game.gameEightInfo,
    },
  ]);

  return (
    <>
      <TailwindCDN />
      <div className="container mx-auto p-4">
        {/* Render title */}
        {tournamentInfo[0] && <BracketTitle {...tournamentInfo[0]} />}

        {/* Render brackets */}
        {gamesData.map((bracketGames, bracketIndex) => (
          <div key={`bracket-${bracketIndex}`} className="grid grid-cols-4 gap-8">
            {/* Winner's Bracket */}
            <div className="col-span-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Winner's Bracket</h3>
              <div className="grid grid-cols-3 gap-8">
                {/* Round 1 */}
                <div>
                  <Game {...bracketGames[0]} />
                  <Game {...bracketGames[1]} />
                  <Game {...bracketGames[2]} />
                </div>
                {/* Round 2 */}
                <div>
                  <Game {...bracketGames[3]} />
                </div>
                {/* Championship */}
                <div>
                  <Game {...bracketGames[7]} />
                  <div className="p-4 bg-white border rounded-lg shadow-sm mt-4 text-center">
                    <div className="font-bold text-gray-800">{bracket[bracketIndex].winnChampion}</div>
                    <div className="text-sm text-gray-500">Champion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loser's Bracket */}
            <div className="col-span-4">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Loser's Bracket</h3>
              <div className="grid grid-cols-2 gap-8">
                {/* Round 1 */}
                <div>
                  <Game {...bracketGames[4]} />
                  <Game {...bracketGames[5]} />
                </div>
                {/* Round 2 */}
                <div>
                  <Game {...bracketGames[6]} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BracketSix;
