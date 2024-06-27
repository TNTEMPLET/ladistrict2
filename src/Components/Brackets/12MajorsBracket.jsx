import BracketFour from "../BracketTemplates/BracketFour";

function MajorBracket_12(){
  const info = [{
    id: 1,
    division: "Little League Baseball",
    site: "J Leo Stevens Park",
    address: "43230 Cannon Rd, Gonzales LA 70737",
    phone: "225-270-5420 | 225-223-9470",
    director: "Conrad Gayle | Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 19th, 2024",
  }]

//12 Majors Backet Information

  const twelveMajorsTeams = {
    one: "GNO-Major",
    two: "Eastbank LL",
    three: "AP",
    four: "GNO-Minors",
    };

    //GAME 1
    const oneTopScore = 0;
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? twelveMajorsTeams.one : twelveMajorsTeams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? twelveMajorsTeams.two : twelveMajorsTeams.one) : "A";

    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? twelveMajorsTeams.three : twelveMajorsTeams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? twelveMajorsTeams.three : twelveMajorsTeams.four) : "B";

    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : winnTwo) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : winnTwo) : "C";

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 0;
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
                ? ( sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? winnSix : loserSix) : "Little League") 
                : winnThree;


    const twelveMajors =  [{  id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to A",
                    gameOneInfo: "6/29/2024 @ 11:00 AM - F4",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to B",
                    gameTwoInfo: "6/29/2024 @ 5:00 PM - F4",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "6/30/2024 @ 5:00 PM - F4",
                    gameFour: "Game 4",
                    gameFourInfo: "6/30/2024 @ 2:00 PM - F4",
                    gameFive: "Game 5",
                    gameFiveNext: " ",
                    gameFiveInfo: "7/1/2024 @ 7:30 PM - F4",
                    gameSix: "Game 6",
                    gameSixNext: "Loser to D (If First Loss)",
                    gameSixInfo: "7/2/2024 @ 5:30 PM - F4",
                    gameSeven: "Game 7",
                    gameSevenInfo: "7/3/2024 @ 6:30 PM - F4",
                    gameSevenMoreInf: "(IF NECESSARY)",
                    teamOne: twelveMajorsTeams.one,
                    teamTwo: twelveMajorsTeams.two, 
                    teamThree: twelveMajorsTeams.three, 
                    teamFour: twelveMajorsTeams.four, 
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
     {twelveMajors.length > 0 && <BracketFour bracket={twelveMajors} info={info}/>}
    </>)

}
export default MajorBracket_12