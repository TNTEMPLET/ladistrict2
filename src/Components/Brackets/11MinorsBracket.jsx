import BracketFive from "../BracketTemplates/BracketFive";
import Scoreboard11U from "../Scoreboards/Scoreboard11U";

function MinorsBracket_11(){
  const info = [{id: 1,
    division: "11U Minors",
    site: "Butch Gore Memorial Park",
    address: "14550 Harry Savoy Rd, St Amant, LA 70774",
    phone: "225-223-9470",
    director: "Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 18th, 2025",
  }]

  const teams = {
    one: "JPRD LL",
    two: "AP Navy",
    three: "AP Red",
    four: "NORD",
    five: "Eastbank",
    };

    //GAME 1
    const oneTopScore = 2;
    const oneBottomScore = 12; 
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "B";
 
    //GAME 2
    const twoTopScore = 12;
    const twoBottomScore = 4;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "A";

    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : teams.five) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : teams.five) : "C";

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 0;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) :"";

    //GAME 5
    const fiveTopScore = 0;
    const fiveBottomScore = 0;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnTwo : winnThree) :"";
    const loserFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore < fiveBottomScore ? winnTwo : winnThree) :"D";

    //GAME 6
    const sixTopScore = 0;
    const sixBottomScore = 0;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnFour : loserThree) : " " ;
    const loserSix = sixTopScore !== sixBottomScore ? (sixTopScore < sixBottomScore ? winnFour : loserThree) : " " ;

    //GAME 7
    const sevenTopScore = 0;
    const sevenBottomScore = 0;
    const winnSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? loserFive : winnSix) : " " ;

    //GAME 8
    const eightTopScore = 0;
    const eightBottomScore = 0;
    const winnChampion = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? winnFive : winnSeven) : "11U Minors" ;
    const loserEight = eightTopScore !== eightBottomScore ? (eightTopScore < eightBottomScore ? winnFive : null) : "E" ;

    // GAME 9
    // const nineTopScore = loserEight !== null ? 0: " ";
    // const nineBottomScore =  loserEight !== null ? 0: " ";
    // const winnChampion =  winnFive !== winnEight
    //             ? ( nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? winnEight : loserEight) : "12U Minors") 
    //             : winnFive;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to B",
                    gameOneInfo: "6/28/2025 @ 10:00 AM - F4",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to A",
                    gameTwoInfo: "6/28/2025 @ 12:30 PM - F4",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "6/29/2025 @ 3:00 PM - F4",
                    gameFour: "Game 4",
                    gameFourInfo: "6/29/2025 @ 5:30 PM - F4",
                    gameFive: "Game 5",
                    gameFiveNext: "Loser to D",
                    gameFiveInfo: "6/30/2025 @ 5:00 PM - F3",
                    gameSix: "Game 6",
                    gameSixInfo: "6/30/2025 @ 7:30 PM - F3",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/1/2025 @ 5:00 PM - F4",
                    gameEight: "Game 8",
                    // gameEightNext: "Loser to E",
                    gameEightInfo: "7/2/2025 @ 6:00 PM - F3",
                    // gameNine: "Game 9",
                    // gameNineInfo: "Immediately Following Game 8",
                    // gameNineMoreInfo: "(IF NECESSARY)",
                    teamOne: teams.one,
                    teamTwo: teams.two, 
                    teamThree: teams.three, 
                    teamFour: teams.four,
                    teamFive: teams.five,
                    oneTopScore: oneTopScore,
                    oneBottomScore: oneBottomScore,
                    twoTopScore: twoTopScore,
                    twoBottomScore: twoBottomScore,
                    threeTopScore: threeTopScore,
                    fourTopScore: fourTopScore,
                    threeBottomScore: threeBottomScore,
                    fourBottomScore: fourBottomScore,
                    sixBottomScore: sixBottomScore,
                    fiveTopScore: fiveTopScore,
                    fiveBottomScore: fiveBottomScore,
                    sixTopScore: sixTopScore,
                    sevenTopScore: sevenTopScore,
                    sevenBottomScore:sevenBottomScore,
                    eightTopScore: eightTopScore,
                    eightBottomScore:eightBottomScore,
                    // nineTopScore: nineTopScore,
                    // nineBottomScore:nineBottomScore,
                    winnOne: winnOne,
                    winnTwo: winnTwo,
                    winnThree: winnThree,
                    winnFour: winnFour,
                    winnFive: winnFive,
                    winnSix: winnSix,
                    winnSeven: winnSeven,
                    // winnEight: winnEight,
                    winnChampion: winnChampion,                            
                    loserOne:loserOne,
                    loserTwo:loserTwo,
                    loserThree:loserThree,
                    loserFive:loserFive,
                    // loserEight: loserEight,
                    
                }
              ]

    return(<>
      <Scoreboard11U />
      <hr />
      {bracket.length > 0 && <BracketFive bracket={bracket} info={info}/>}
    </>)

}
export default MinorsBracket_11