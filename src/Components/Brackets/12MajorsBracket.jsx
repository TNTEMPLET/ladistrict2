import BracketFive from "../BracketTemplates/BracketFive";
import Scoreboard12U from "../Scoreboards/Scoreboard12U";

function MajorBracket_12(){
  const info = [{id: 1,
    division: "Majors",
    site: "Butch Gore Memorial Park",
    address: "14550 Harry Savoy Rd, St Amant, LA 70774",
    phone: "225-223-9470",
    director: "Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 19th, 2024",
  }]

  const tenMinorsTeams = {
    one: "Bogalusa LL",
    two: "Eastbank LL",
    three: "JPRD LL",
    four: "AP LL",
    five: "NORD LL",
    };

    //GAME 1
    const oneTopScore = 0;
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? tenMinorsTeams.one : tenMinorsTeams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? tenMinorsTeams.one : tenMinorsTeams.two) : "A";
 
    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? tenMinorsTeams.three : tenMinorsTeams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? tenMinorsTeams.three : tenMinorsTeams.four) : "B";

    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : tenMinorsTeams.five) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : tenMinorsTeams.five) : "C";

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
    const winnEight = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? winnFive : winnSeven) : " " ;
    const loserEight = eightTopScore !== eightBottomScore ? (eightTopScore < eightBottomScore ? winnFive : null) : "E" ;

    //GAME 9
    const nineTopScore = loserEight !== null ? 0: " ";
    const nineBottomScore =  loserEight !== null ? 0: " ";
    const winnChampion =  winnFive !== winnEight
                ? ( nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? winnEight : loserEight) : "10U Minors") 
                : winnFive;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to B",
                    gameOneInfo: "6/28/2024 @ 3:00 PM - F4",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to A",
                    gameTwoInfo: "6/28/2024 @ 5:30 PM - F4",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "6/29/2024 @ 10:00 AM - F4",
                    gameFour: "Game 4",
                    gameFourInfo: "6/29/2024 @ 12:30 PM - F4",
                    gameFive: "Game 5",
                    gameFiveNext: "Loser to D",
                    gameFiveInfo: "6/30/2024 @ 5:00 PM - F4",
                    gameSix: "Game 6",
                    gameSixInfo: "6/30/2024 @ 7:30 PM - F4",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/1/2024 @ 7:30 PM - F4",
                    gameEight: "Game 8",
                    gameEightNext: "Loser to E",
                    gameEightInfo: "7/2/2024 @ 5:00 PM - F4",
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
export default MajorBracket_12

