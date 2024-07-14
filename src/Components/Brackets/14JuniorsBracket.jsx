import BracketFive from "../BracketTemplates/BracketFive";
import Scoreboard14U from "../Scoreboards/Scoreboard14U";
function JuniorsBracket_14(){
  const info = [{id: 1,
    division: "Junior League Baseball",
    site: "St. Amant High School",
    address: "12035 LA-431, St. Amant LA 70774",
    phone: "225-270-5420",
    director: "Conrad Gayle",
    next: "Southwest Region",
    nextAddress: "Albuquerque, NM",
  }]

  const teams = {
    one: "Lafayette LL",
    two: "Mid City LL",
    three: "Moss Bluff LL",
    four: "Ascension LL",
    five: "Avoyelles Am LL",
    };

    //GAME 1
    const oneTopScore = 11;
    const oneBottomScore = 12;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";
 
    //GAME 2
    const twoTopScore = 2;
    const twoBottomScore = 12;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "B";

    //GAME 3
    const threeTopScore = 7;
    const threeBottomScore = 13;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : teams.five) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : teams.five) : "C";

    //GAME 4
    const fourTopScore = 11;
    const fourBottomScore = 9;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) :"";

    //GAME 6
    const fiveTopScore = 0;
    const fiveBottomScore = 9;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnTwo : winnThree) :"";
    const loserFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore < fiveBottomScore ? winnTwo : winnThree) :"D";

    //GAME 5
    const sixTopScore = 12;
    const sixBottomScore = 11;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnFour : loserThree) : " " ;

    //GAME 7
    const sevenTopScore = 14;
    const sevenBottomScore = 6;
    const winnSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? loserFive : winnSix) : " " ;

    //GAME 8
    const eightTopScore = 18;
    const eightBottomScore = 0;
    const winnEight = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? winnFive : winnSeven) : " " ;
    const loserEight = eightTopScore !== eightBottomScore ? (eightTopScore < eightBottomScore ? winnFive : null) : "E" ;

    //GAME 9
    const nineTopScore = loserEight !== null ? 0: " ";
    const nineBottomScore =  loserEight !== null ? 0: " ";
    const winnChampion =  winnFive !== winnEight
                ? ( nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? winnEight : loserEight) : "Junior League") 
                : winnFive;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to B",
                    gameOneInfo: "7/11/2024 @ 3:00 PM",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to A",
                    gameTwoInfo: "7/11/2024 @ 6:00 PM",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "7/12/2024 @ 3:00 PM",
                    gameFour: "Game 4",
                    gameFourInfo: "7/12/2024 @ 6:00 PM",
                    gameFive: "Game 6",
                    gameFiveNext: "Loser to D",
                    gameFiveInfo: "7/13/2024 @ 2:00 PM",
                    gameSix: "Game 5",
                    gameSixInfo: "7/13/2024 @ 10:00 AM",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/13/2024 @ 6:00 PM",
                    gameSevenMoreInf: "(IF NECESSARY)",
                    gameEight: "Game 8",
                    gameEightNext: "Loser to E",
                    gameEightInfo: "7/14/2024 @ 10:00 AM",
                    gameNine: "Game 9",
                    gameNineInfo: "7/14/2024 @ 2:00 PM",
                    gameNineMoreInfo: "(IF NECESSARY)",
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
      <Scoreboard14U />
      <hr />
      {bracket.length > 0 && <BracketFive bracket={bracket} info={info}/>}
    </>)

}
export default JuniorsBracket_14;
