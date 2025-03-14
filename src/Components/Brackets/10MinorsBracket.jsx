import BracketFive from "../BracketTemplates/BracketFive";
import Scoreboard10U from "../Scoreboards/Scoreboard10U";
function MinorsBracket_10(){
  const info = [{id: 1,
    division: "Minor Baseball (8-10)",
    site: "Tee-Joe Park",
    address: "524 W. Orice Roth Rd, Gonzales LA 70737",
    phone: "225-270-5420 | 225-223-9470",
    director: "Conrad Gayle | Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 19th, 2024",
  }]

  const tenMinorsTeams = {
    one: "GNO-Major",
    two: "Eastbank LL",
    three: "AP - Navy",
    four: "GNO-Minors",
    five: "AP - Red",
    };

    //GAME 1
    const oneTopScore = 2;
    const oneBottomScore = 6;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? tenMinorsTeams.one : tenMinorsTeams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? tenMinorsTeams.one : tenMinorsTeams.two) : "A";
 
    //GAME 2
    const twoTopScore = 18;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? tenMinorsTeams.three : tenMinorsTeams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? tenMinorsTeams.three : tenMinorsTeams.four) : "B";

    //GAME 3
    const threeTopScore = 13;
    const threeBottomScore = 9;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : tenMinorsTeams.five) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : tenMinorsTeams.five) : "C";

    //GAME 4
    const fourTopScore = 20;
    const fourBottomScore = 3;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) :"";

    //GAME 5
    const fiveTopScore = 3;
    const fiveBottomScore = 2;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnTwo : winnThree) :"";
    const loserFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore < fiveBottomScore ? winnTwo : winnThree) :"D";

    //GAME 6
    const sixTopScore = 6;
    const sixBottomScore = 9;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnFour : loserThree) : " " ;
    const loserSix = sixTopScore !== sixBottomScore ? (sixTopScore < sixBottomScore ? winnFour : loserThree) : " " ;

    //GAME 7
    const sevenTopScore = 6;
    const sevenBottomScore = 3;
    const winnSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? loserFive : winnSix) : " " ;

    //GAME 8
    const eightTopScore = 4;
    const eightBottomScore = 6;
    const winnEight = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? winnFive : winnSeven) : " " ;
    const loserEight = eightTopScore !== eightBottomScore ? (eightTopScore < eightBottomScore ? winnFive : null) : "E" ;

    //GAME 9
    const nineTopScore = loserEight !== null ? 5: " ";
    const nineBottomScore =  loserEight !== null ? 3: " ";
    const winnChampion =  winnFive !== winnEight
                ? ( nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? winnEight : loserEight) : "10U Minors") 
                : winnFive;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to B",
                    gameOneInfo: "6/29/2024 @ 11:00 AM - TJP",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to A",
                    gameTwoInfo: "6/29/2024 @ 2:00 PM - TJB",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "6/29/2024 @ 2:00 PM - TJP",
                    gameFour: "Game 4",
                    gameFourInfo: "6/30/2024 @ 11:00 AM - TJP",
                    gameFive: "Game 5",
                    gameFiveNext: "Loser to D",
                    gameFiveInfo: "6/30/2024 @ 2:00 PM - TJP",
                    gameSix: "Game 6",
                    gameSixInfo: "6/30/2024 @ 5:00 PM - TJP",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/1/2024 @ 6:30 PM - TJP",
                    gameSevenMoreInf: "(IF NECESSARY)",
                    gameEight: "Game 8",
                    gameEightNext: "Loser to E",
                    gameEightInfo: "7/2/2024 @ 6:00 PM - TJP",
                    gameNine: "Game 9",
                    gameNineInfo: "7/2/2024 @ 8:00 PM - TJP",
                    gameNineMoreInfo: "(IF NECESSARY)",
                    teamOne: tenMinorsTeams.one,
                    teamTwo: tenMinorsTeams.two, 
                    teamThree: tenMinorsTeams.three, 
                    teamFour: tenMinorsTeams.four,
                    teamFive: tenMinorsTeams.five,
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
                    nineTopScore: nineTopScore,
                    nineBottomScore:nineBottomScore,
                    winnOne: winnOne,
                    winnTwo: winnTwo,
                    winnThree: winnThree,
                    winnFour: winnFour,
                    winnFive: winnFive,
                    winnSix: winnSix,
                    winnSeven: winnSeven,
                    winnEight: winnEight,
                    winnChampion: winnChampion,                            
                    loserOne:loserOne,
                    loserTwo:loserTwo,
                    loserThree:loserThree,
                    loserFive:loserFive,
                    loserEight: loserEight,
                    
                }
              ]

    return(<>
      <Scoreboard10U />
      <hr />
      {bracket.length > 0 && <BracketFive bracket={bracket} info={info}/>}
    </>)

}
export default MinorsBracket_10
