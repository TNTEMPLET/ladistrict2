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
    const oneTopScore = 0;
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";
    
    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? teams.three : teams.four) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? teams.three : teams.four) : "B";
    
    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? winnOne : winnTwo) : "";
    const loserThree = threeTopScore !== threeBottomScore ? (threeTopScore < threeBottomScore ? winnOne : winnTwo) : "C" ;

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 0;
    const winnFour = fourTopScore !== fourBottomScore ? (fourTopScore > fourBottomScore ? loserOne : loserTwo) : " " ;
    
     //GAME 5
    const fiveTopScore = 0;
    const fiveBottomScore = 0;
    const winnFive = fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? loserThree : winnFour) : " " ;

    //GAME 6
    const sixTopScore = 0;
    const sixBottomScore =  0;
    const winnChampion = sixTopScore !== sixBottomScore ? (sixTopScore > sixBottomScore ? winnThree : winnFive) : "Tee Ball"  ;

    const bracket =  [{  id: 1,
        gameOne: "Game 1",
        gameOneNext: "Loser to A",
        gameOneInfo: "6/29/2024 @ 9:00 AM - F3",
        gameTwo: "Game 2",
        gameTwoNext: "Loser to B",
        gameTwoInfo: "6/30/2024 @ 9:00 AM - F3",
        gameThree: "Game 3",
        gameThreeNext: "Loser to C",
        gameThreeInfo: "6/30/2024 @ 12:00 PM - F3",
        gameFour: "Game 4",
        gameFourInfo: "7/1/2024 @ 6:00 PM - F3",
        gameFive: "Game 5",
        gameFiveInfo: "",
        gameSix: "Game 6",
        gameSixInfo: "",
        teamOne: teams.one,
        teamTwo: teams.two, 
        teamThree: teams.three,
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
