import React from 'react';
import { DoubleEliminationBracket, Match, SVGViewer } from '@g-loot/react-tournament-brackets';

const matches = [
  // Winners' Bracket - Round 1
  {
    id: "W1",
    name: "Winners Round 1 - Match 1",
    nextMatchId: "W3",
    nextLooserMatchId: "L1",
    tournamentRound: "1",
    state: "SCORE_DONE",
    date: "2025-07-01",
    time: "10:00 AM",
    field: "Field A",
    participants: [
      { id: "team1", name: "Yankees", resultText: "5", isWinner: true },
      { id: "team2", name: "Red Sox", resultText: "3", isWinner: false },
    ],
  },
  {
    id: "W2",
    name: "Winners Round 1 - Match 2",
    nextMatchId: "W3",
    nextLooserMatchId: "L1",
    tournamentRound: "1",
    state: "SCORE_DONE",
    date: "2025-07-01",
    time: "12:00 PM",
    field: "Field B",
    participants: [
      { id: "team3", name: "Dodgers", resultText: "4", isWinner: true },
      { id: "team4", name: "Cubs", resultText: "2", isWinner: false },
    ],
  },
  // Winners' Round 2 (Team 5 vs. Winner of W1)
  {
    id: "W3",
    name: "Winners Round 2",
    nextMatchId: "WF",
    nextLooserMatchId: "L2",
    tournamentRound: "2",
    state: "SCORE_DONE",
    date: "2025-07-02",
    time: "11:00 AM",
    field: "Field A",
    participants: [
      { id: "team1", name: "Yankees", resultText: "6", isWinner: true },
      { id: "team5", name: "Mets", resultText: "4", isWinner: false },
    ],
  },
  {
    id: "WF",
    name: "Winners Final",
    nextMatchId: "GF",
    nextLooserMatchId: "LF",
    tournamentRound: "3",
    state: "SCORE_DONE",
    date: "2025-07-03",
    time: "2:00 PM",
    field: "Field A",
    participants: [
      { id: "team1", name: "Yankees", resultText: "7", isWinner: true },
      { id: "team3", name: "Dodgers", resultText: "5", isWinner: false },
    ],
  },
  // Losers' Bracket
  {
    id: "L1",
    name: "Losers Round 1",
    nextMatchId: "L2",
    tournamentRound: "1",
    state: "SCORE_DONE",
    date: "2025-07-02",
    time: "9:00 AM",
    field: "Field B",
    participants: [
      { id: "team2", name: "Red Sox", resultText: "4", isWinner: true },
      { id: "team4", name: "Cubs", resultText: "1", isWinner: false },
    ],
  },
  {
    id: "L2",
    name: "Losers Round 2",
    nextMatchId: "LF",
    tournamentRound: "2",
    state: "SCORE_DONE",
    date: "2025-07-03",
    time: "10:00 AM",
    field: "Field B",
    participants: [
      { id: "team2", name: "Red Sox", resultText: "5", isWinner: true },
      { id: "team5", name: "Mets", resultText: "3", isWinner: false },
    ],
  },
  {
    id: "LF",
    name: "Losers Final",
    nextMatchId: "GF",
    tournamentRound: "3",
    state: "SCORE_DONE",
    date: "2025-07-03",
    time: "12:00 PM",
    field: "Field A",
    participants: [
      { id: "team2", name: "Red Sox", resultText: "6", isWinner: true },
      { id: "team3", name: "Dodgers", resultText: "4", isWinner: false },
    ],
  },
  // Grand Final
  {
    id: "GF",
    name: "Grand Final",
    nextMatchId: null,
    tournamentRound: "4",
    state: "SCORE_DONE",
    date: "2025-07-04",
    time: "3:00 PM",
    field: "Field A",
    participants: [
      { id: "team1", name: "Yankees", resultText: "8", isWinner: true },
      { id: "team2", name: "Red Sox", resultText: "6", isWinner: false },
    ],
  },
];

// Custom Match Component to display Date, Time, and Field
const CustomMatchComponent = ({ match, ...props }) => {
  return (
    <div className="border border-gray-300 rounded p-2 bg-white shadow-sm">
      <Match match={match} {...props} />
      <div className="text-sm text-gray-600 mt-2">
        <p><strong>Date:</strong> {match.date || 'TBD'}</p>
        <p><strong>Time:</strong> {match.time || 'TBD'}</p>
        <p><strong>Field:</strong> {match.field || 'TBD'}</p>
      </div>
    </div>
  );
};

function TestBracket() {
  // Log matches for debugging
  console.log('Matches:', JSON.stringify(matches, null, 2));
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Baseball Double Elimination Tournament Bracket</h1>
      <DoubleEliminationBracket
        matches={matches}
        matchComponent={CustomMatchComponent}
        svgWrapper={({ children, ...props }) => (
          <SVGViewer width={1200} height={600} {...props}>
            {children}
          </SVGViewer>
        )}
      />
    </div>
  );
}

export default TestBracket;
