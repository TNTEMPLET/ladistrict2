import BracketFour from "../BracketTemplates/BracketFour";

function Teeball(){
    const info = [{
        id: 1,
        division: "Tee Ball Baseball",
        site: "Butch Gore Memorial Park",
        address: "14550 Harry Savoy Rd, St Amant, LA 70774",
        phone: "225-223-9470",
        director: "Wayne Grenfell",
        next: "LA Little League State Tournament",
        nextAddress: "St. Julien Park - Broussard, La | July 18th, 2025",
      }]
    const teams = {
        one: "AP LL",
        two: "NORD",
        three: "Eastbank",
        four: "JPRD",
    }

    //GAME 1
    const oneTopScore = 9;
    const oneBottomScore = 14;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";
    
    //GAME 2
    const twoTopScore = 7;
    const twoBottomScore = 15;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "B";
    
    //GAME 3
    const threeTopScore = 9;
    const threeBottomScore = 20;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : winnTwo) : "";
    const loserThree = threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : winnTwo) : "C" ;

    //GAME 4
    const fourTopScore = 4;
    const fourBottomScore = 20;
    const winnFour = fourTopScore !== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) : " " ;
    
     //GAME 5
    const fiveTopScore = 11;
    const fiveBottomScore = 25;
    const winnFive = fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? loserThree : winnFour) : " " ;

    //GAME 6
    const sixTopScore = 8;
    const sixBottomScore =  15;
    const winnChampion = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnThree : winnFive) : "Tee Ball"  ;

    const bracket =  [{  id: 1,
        gameOne: "Game 1",
        gameOneNext: "Loser to A",
        gameOneInfo: "6/28/2025 @ 10:00 AM - F2",
        gameTwo: "Game 2",
        gameTwoNext: "Loser to B",
        gameTwoInfo: "6/28/2025 @ 11:30 AM - F2",
        gameThree: "Game 3",
        gameThreeNext: "Loser to C",
        gameThreeInfo: "6/29/2025 @ 10:00 AM - F2",
        gameFour: "Game 4",
        gameFourInfo: "6/29/2025 @ 11:30 AM - F2",
        gameFive: "Game 5",
        gameFiveInfo: "6/30/2025 @ 5:00PM - F2",
        gameSix: "Game 6",
        gameSixInfo: "7/1/2025 @ 5:00 PM - F2",
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
        fiveTopScore: fiveTopScore,
        fiveBottomScore: fiveBottomScore,
        sixTopScore: sixTopScore,
        sixBottomScore: sixBottomScore,
        winnOne: winnOne,
        winnTwo: winnTwo,
        winnThree: winnThree,
        winnFour: winnFour,
        winnFive: winnFive,
        winnChampion: winnChampion,                            
        loserOne:loserOne,
        loserTwo:loserTwo,
        loserThree:loserThree,
    }]

    return(<>{bracket.length > 0 && <BracketFour bracket={bracket} info={info} />}</>)
}
export default Teeball
