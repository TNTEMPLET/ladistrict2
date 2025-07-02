import BracketEight from "../BracketTemplates/BracketEight";

function CoachesPitch(){
  const info = [{id: 1,
    division: "Coaches Pitch Baseball",
    site: "Butch Gore Memorial Park",
    address: "14550 Harry Savoy Rd, St Amant, LA 70774",
    phone: "225-223-9470",
    director: "Wayne Grenfell",
    next: "LA Little League State Tournament",
    nextAddress: "St. Julien Park - Broussard, La | July 18th, 2025",
  }]

  const teams = {
    one: "AP - Navy",
    two: "NORD - Navy",
    three: "Eastbank - Navy",
    four: "JPRD",
    five: "AP - Red",
    six: "NORD -  Red",
    seven: "Bogalusa",
    eight: "Eastbank - Vegas",
    };

    //GAME 1
    const oneTopScore = 16; 
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";

    //GAME 2
    const twoTopScore = 2;
    const twoBottomScore = 12;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "B";

    //GAME 3
    const threeTopScore = 8;
    const threeBottomScore = 7;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? teams.five : teams.six) : "";
    const loserThree =  threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? teams.five : teams.six) : "C";

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 20;
    const winnFour =  fourTopScore!== fourBottomScore ? (fourTopScore > fourBottomScore ? teams.seven : teams.eight) :" ";
    const loserFour =  fourTopScore!== fourBottomScore ? (fourTopScore < fourBottomScore ? teams.seven : teams.eight) :"D";

    //GAME 5
    const fiveTopScore = 6;
    const fiveBottomScore = 3;
    const winnFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnOne : winnTwo) :" ";
    const loserFive =  fiveTopScore !== fiveBottomScore ? (fiveTopScore < fiveBottomScore ? winnOne : winnTwo) :"F";

    //GAME 6
    const sixTopScore = 0;
    const sixBottomScore = 5;
    const winnSix = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnThree : winnFour) : " " ;
    const loserSix =  sixTopScore!== sixBottomScore ? (sixTopScore < sixBottomScore ? winnThree : winnFour) : "E";

    //GAME 7
    const sevenTopScore = 3;
    const sevenBottomScore = 10;
    const winnSeven = sevenTopScore !== sevenBottomScore ? (sevenTopScore > sevenBottomScore ? loserOne : loserTwo) : " ";

    //GAME 8
    const eightTopScore = 10;
    const eightBottomScore = 2;
    const winnEight = eightTopScore !== eightBottomScore ? (eightTopScore > eightBottomScore ? loserThree : loserFour) : " ";

    //GAME 9
    const nineTopScore = 10;
    const nineBottomScore = 1;
    const winnNine = nineTopScore !== nineBottomScore ? (nineTopScore > nineBottomScore ? loserSix : winnSeven) : " " ;

    //GAME 10
    const tenTopScore = 5;
    const tenBottomScore = 7;
    const winnTen = tenTopScore !== tenBottomScore ? (tenTopScore > tenBottomScore ? winnEight : loserFive) : " " ;
    
    //GAME 11
    const elevenTopScore = 9;
    const elevenBottomScore = 10;
    const winnEleven = elevenTopScore !== elevenBottomScore ? (elevenTopScore > elevenBottomScore ? winnFive : winnSix) : " " ;
    const loserEleven =  elevenTopScore!== elevenBottomScore ? (elevenTopScore < elevenBottomScore ? winnFive : winnSix) :"G";

    //GAME 12
    const twelveTopScore = 0;
    const twelveBottomScore = 0;
    const winnTwelve = twelveTopScore !== twelveBottomScore ? (twelveTopScore > twelveBottomScore ? winnNine : winnTen) : " " ;

    //GAME 13
    const thirteenTopScore = 0;
    const thirteenBottomScore = 0;
    const winnThirteen = thirteenTopScore !== thirteenBottomScore ? (thirteenTopScore > thirteenBottomScore ? loserEleven : winnTwelve) : " " ;

    //GAME 14
    const fourteenTopScore = 0;
    const fourteenBottomScore = 0;
    const winnChampion = fourteenTopScore !== fourteenBottomScore ? (fourteenTopScore > fourteenBottomScore ? winnEleven : winnThirteen) : "Coaches Pitch" ;


    const bracket = [
                    {id: 1,
                    gameOne: "Game 1",
                    gameOneNext: "Loser to A",
                    gameOneInfo: "6/28/2025 @ 1:00 PM - F2",
                    gameTwo: "Game 2",
                    gameTwoNext: "Loser to B",
                    gameTwoInfo: "6/28/2025 @ 2:30 PM - F2",
                    gameThree: "Game 3",
                    gameThreeNext: "Loser to C",
                    gameThreeInfo: "6/28/2025 @ 4:00 PM - F2",
                    gameFour: "Game 4",
                    gameFourNext: "Loser to D",
                    gameFourInfo: "6/28/2025 @ 5:30 PM - F2",
                    gameFive: "Game 5",
                    gameFiveNext: "Loser to F",
                    gameFiveInfo: "6/29/2025 @ 1:00 PM - F2",
                    gameSix: "Game 6",
                    gameSixNext: "Loser to E",
                    gameSixInfo: "6/29/2025 @ 2:30 PM - F2",
                    gameSeven: "Game 7",
                    gameSevenInfo: "6/29/2025 @ 4:00 PM - F2",
                    gameEight: "Game 8",
                    gameEightInfo: "6/29/2025 @ 5:30 PM - F2",
                    gameNine: "Game 9",
                    gameNineInfo: "6/30/2025 @ 6:30 PM - F2",
                    gameTen: "Game 10",
                    gameTenInfo: "6/30/2025 @ 8:00 PM - F2",
                    gameEleven: "Game 11",
                    gameElevenNext: "Loser to G",
                    gameElevenInfo: "7/1/2025 @ 6:30 PM - F2",
                    gameTwelve: "Game 12",
                    gameTwelveInfo: "7/1/2025 @ 8:00 PM - F2",
                    gameThirteen: "Game 13",
                    gameThirteenInfo: "7/2/2025 @ 5:30 PM - F2",
                    gameFourteen: "Game 14",
                    gameFourteenInfo: "7/2/2025 @ 7:00 PM - F2",
                    teamOne: teams.one,
                    teamTwo: teams.two, 
                    teamThree: teams.three, 
                    teamFour: teams.four,
                    teamFive: teams.five,
                    teamSix: teams.six,
                    teamSeven: teams.seven,
                    teamEight: teams.eight,
                    oneTopScore: oneTopScore,
                    oneBottomScore: oneBottomScore,
                    twoTopScore: twoTopScore,
                    twoBottomScore: twoBottomScore,
                    threeTopScore: threeTopScore,
                    threeBottomScore: threeBottomScore,
                    fourTopScore: fourTopScore,
                    fourBottomScore: fourBottomScore,
                    fiveTopScore: fiveTopScore,
                    fiveBottomScore: fiveBottomScore,
                    sixTopScore: sixTopScore,
                    sixBottomScore: sixBottomScore,
                    sevenTopScore: sevenTopScore,
                    sevenBottomScore:sevenBottomScore,
                    eightTopScore: eightTopScore,
                    eightBottomScore:eightBottomScore,
                    nineTopScore: nineTopScore,
                    nineBottomScore:nineBottomScore,
                    tenTopScore: tenTopScore,
                    tenBottomScore:tenBottomScore,
                    elevenTopScore: elevenTopScore,
                    elevenBottomScore:elevenBottomScore,
                    twelveTopScore: twelveTopScore,
                    twelveBottomScore:twelveBottomScore,
                    thirteenTopScore: thirteenTopScore,
                    thirteenBottomScore:thirteenBottomScore,
                    fourteenTopScore: fourteenTopScore,
                    fourteenBottomScore:fourteenBottomScore,
                    winnOne: winnOne,
                    winnTwo: winnTwo,
                    winnThree: winnThree,
                    winnFour: winnFour,
                    winnFive: winnFive,
                    winnSix: winnSix,
                    winnSeven: winnSeven,
                    winnEight: winnEight,
                    winnNine: winnNine,
                    winnTen: winnTen,
                    winnEleven: winnEleven,
                    winnTwelve: winnTwelve,
                    winnThirteen: winnThirteen,
                    winnChampion: winnChampion,                            
                    loserOne: loserOne,
                    loserTwo: loserTwo,
                    loserThree: loserThree,
                    loserFour: loserFour,
                    loserFive: loserFive,
                    loserSix: loserSix,
                    loserEleven: loserEleven,
                }
              ]

    return(<>
     {bracket.length > 0 && <BracketEight bracket={bracket} info={info}/>}
    </>)

}
export default CoachesPitch
