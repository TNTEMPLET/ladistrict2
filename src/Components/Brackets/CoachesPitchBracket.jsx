import BracketSix from "../BracketTemplates/BracketSix";

function CoachesPitch(){
  const info = [{id: 1,
    division: "Coaches Pitch Baseball",
    site: "J Leo Stevens Park",
    address: "43230 Cannon Rd, Gonzales LA 70737",
    phone: "225-270-5420 | 225-223-9470",
    director: "Conrad Gayle | Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 19th, 2024",
  }]

  const coachesPitchTeams = {
    one: "GNO - Navy",
    two: "Eastbank - Navy",
    three: "AP - Navy",
    four: "Eastbank - Vegas",
    five: "GNO - Red",
    six: "AP -  Red",
    };

    //GAME 1
    const oneTopScore = 0;
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? coachesPitchTeams.one : coachesPitchTeams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? coachesPitchTeams.one : coachesPitchTeams.two) : "A";

    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? coachesPitchTeams.three : coachesPitchTeams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? coachesPitchTeams.three : coachesPitchTeams.four) : "C";

    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : coachesPitchTeams.five) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : coachesPitchTeams.five) : "D";

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 0;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? winnTwo : coachesPitchTeams.six) :"";
    const loserFour =  fourTopScore!== fourBottomScore ? (fourTopScore < fourBottomScore ? winnTwo : coachesPitchTeams.six) :"B";

    //GAME 5
    const fiveTopScore = 0;
    const fiveBottomScore = 0;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? loserOne : loserFour) :"";

    //GAME 6
    const sixTopScore = 0;
    const sixBottomScore = 0;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? loserTwo : loserThree) : " " ;

    //GAME 7
    const sevenTopScore = 0;
    const sevenBottomScore = 0;
    const winnSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? winnThree : winnFour) : " " ;
    const loserSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore < sevenBottomScore ? winnThree : winnFour) : "E" ;

    //GAME 8
    const eightTopScore = 0;
    const eightBottomScore = 0;
    const winnEight = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? winnFive : winnSix) : " " ;

    //GAME 9
    const nineTopScore = 0;
    const nineBottomScore = 0;
    const winnNine = nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? loserSeven : winnEight) : " " ;

    //GAME 10
    const tenTopScore = 0;
    const tenBottomScore = 0;
    const winnChampion = tenTopScore !== tenBottomScore ? (tenTopScore > tenBottomScore ? winnSeven : winnNine) : "Coaches Pitch" ;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to A",
                    gameOneInfo: "6/29/2024 @ 10:30 AM - F3",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to C",
                    gameTwoInfo: "6/29/2024 @ 12:00 PM - F3",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to D",
                    gameThreeInfo: "6/29/2024 @ 2:00 PM - F3",
                    gameFour: "Game 4",
                    gameFourNext: "Loser to B",
                    gameFourInfo: "6/29/2024 @ 3:30 PM - F3",
                    gameFive: "Game 5",
                    gameFiveInfo: "6/30/2024 @ 10:00 AM - F3",
                    gameSix: "Game 6",
                    gameSixInfo: "6/30/2024 @ 2:00 PM - F3",
                    gameSeven: "Game 7",
                    gameSevenNext: "Loser to E",
                    gameSevenInfo: "6/30/2024 @ 3:30 PM - F3",
                    gameEight: "Game 8",
                    gameEightInfo: "7/2/2024 @ 6:00 PM - F3",
                    gameNine: "Game 9",
                    gameNineInfo: "7/2/2024 @ 7:30 PM - F3",
                    gameTen: "Game 10",
                    gameTenInfo: "7/3/2024 @ 6:00 PM - F3",
                    gameEleven: "Game 11",
                    teamOne: coachesPitchTeams.one,
                    teamTwo: coachesPitchTeams.two, 
                    teamThree: coachesPitchTeams.three, 
                    teamFour: coachesPitchTeams.four,
                    teamFive: coachesPitchTeams.five,
                    teamSix: coachesPitchTeams.six,
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
                    tenTopScore: tenTopScore,
                    tenBottomScore:tenBottomScore,
                    winnOne: winnOne,
                    winnTwo: winnTwo,
                    winnThree: winnThree,
                    winnFour: winnFour,
                    winnFive: winnFive,
                    winnSix: winnSix,
                    winnSeven: winnSeven,
                    winnEight: winnEight,
                    winnNine: winnNine,
                    winnChampion: winnChampion,                            
                    loserOne: loserOne,
                    loserTwo: loserTwo,
                    loserThree: loserThree,
                    loserFour: loserFour,
                    loserSeven: loserSeven,
                }
              ]

    return(<>
     {bracket.length > 0 && <BracketSix bracket={bracket} info={info}/>}
    </>)

}
export default CoachesPitch