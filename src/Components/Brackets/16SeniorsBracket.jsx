import BracketFour from "../BracketTemplates/BracketFour";
import Scoreboard16U from "../Scoreboards/Scoreboard16U";

function SeniorBracket_16(){
  const info = [{
    id: 1,
    division: "Senior League Baseball",
    site: "Dutchtown High School",
    address: "13165 LA Hwy 73, Geismar LA 70734",
    phone: "225-270-5420",
    director: "Conrad Gayle",
    next: "Southwest Region",
    nextAddress: "Seguin, Tx",
  }]

//12 Majors Backet Information

  const teams = {
    one: "Moss Bluff LL",
    two: "Ascension LL",
    three: "Avoyelles Am LL",
    four: "Mid City LL",
    };

    //GAME 1
    const oneTopScore = 0;
    const oneBottomScore = 35;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";

    //GAME 2
    const twoTopScore = 3;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "B";

    //GAME 4
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : winnTwo) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : winnTwo) : "C";

    //GAME 3
    const fourTopScore = 0;
    const fourBottomScore = 12;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) :"";

    //GAME 5
    const fiveTopScore = 0;
    const fiveBottomScore = 0;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? loserThree : winnFour) :"";

    //GAME 6
    const sixTopScore = 0;
    const sixBottomScore = 0;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnThree : winnFive) : " " ;
    const loserSix = sixTopScore !== sixBottomScore ? (sixTopScore < sixBottomScore ? winnThree : null) : "D" ;

    //GAME 7
    const sevenTopScore = 0;
    const sevenBottomScore =  loserSix !== null ? 0: " ";
    const winnChampion =  winnSix !== winnThree 
                ? ( sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? winnSix : loserSix) : "Senior League") 
                : winnThree;


    const bracket =  [{  id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to A",
                    gameOneInfo: "7/12/2024 @ 3:00 PM",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to B",
                    gameTwoInfo: "7/12/2024 @ 6:00 PM",
                    gameThree: "Game 4",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "7/13/2024 @ 2:00 PM",
                    gameFour: "Game 3",
                    gameFourInfo: "7/13/2024 @ 10:00 AM",
                    gameFive: "Game 5",
                    gameFiveNext: " ",
                    gameFiveInfo: "7/13/2024 @ 6:00 PM",
                    gameSix: "Game 6",
                    gameSixNext: "Loser to D (If First Loss)",
                    gameSixInfo: "7/14/2024 @ 10:00 AM",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/14/2024 @ 2:00 PM",
                    gameSevenMoreInf: "(IF NECESSARY)",
                    teamOne: teams.one,
                    teamTwo: teams.two, 
                    teamThree: teams.three, 
                    teamFour: teams.four, 
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
                    winnOne: winnOne,
                    winnTwo: winnTwo,
                    winnThree: winnThree,
                    winnFour: winnFour,
                    winnFive: winnFive,
                    winnSix: winnSix,
                    winnChampion: winnChampion,                            
                    loserOne:loserOne,
                    loserTwo:loserTwo,
                    loserThree:loserThree,
                    loserSix:loserSix,
                    sevenBottomScore:sevenBottomScore, 
                }]

    return(<>
      <Scoreboard16U />
      <hr />
      {bracket.length > 0 && <BracketFour bracket={bracket} info={info}/>}
    </>)

}
export default SeniorBracket_16
