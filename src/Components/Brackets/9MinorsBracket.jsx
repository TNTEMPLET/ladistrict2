import BracketThree from "../BracketTemplates/BracketThree";
import Scoreboard9U from "../Scoreboards/Scoreboard9U";

function MinorsBracket_9(){
    const info = [{
        id: 1,
        division: "Minor Baseball (9)",
        site: "Butch Gore Memorial Park",
        address: "14550 Harry Savoy Rd, St Amant, LA 70774",
        phone: "225-223-9470",
        director: "Wayne Grenfell",
        next: "LA Little League State Tournament",
        nextAddress: "St. Julien Park - Broussard, La | July 18th, 2025",
    }]
    const teams = {
        one: "JPRD",
        two: "Eastbank",
        three: "AP LL",
    }

    //GAME 1
    const oneTopScore = 7;
    const oneBottomScore = 6;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? teams.one : teams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? teams.one : teams.two) : "A";
    
    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 7;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? winnOne : teams.three) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? winnOne : teams.three) : "B";
    
    //GAME 3
    const threeTopScore = 8;
    const threeBottomScore = 4;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? loserOne : loserTwo) : "";

    //GAME 4
    const fourTopScore = 15;
    const fourBottomScore = 0;
    const winnChampion = fourTopScore !== fourBottomScore ? (fourTopScore > fourBottomScore ? winnTwo : winnThree) : "9U Minors" ;
    const loserFour = fourTopScore !== fourBottomScore ? (fourTopScore < fourBottomScore ? winnTwo : null) : "C" ;

    // //GAME 5
    // const fiveTopScore = 0;
    // const fiveBottomScore =  loserFour !== null ? 0: " ";
    // const winnChampion =  winnFour !== winnTwo 
    //             ? ( fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnFour : loserFour) : "9U Minors") 
    //             : winnFour;

    const nineMinors =  [{  id: 1,
        gameOne: "Game 1",
        gameOneNext: "Loser to A",
        gameOneInfo: "6/28/2025 @ 10:00 AM - F1",
        gameTwo: "Game 2",
        gameTwoNext: "Loser to B",
        gameTwoInfo: "6/28/2025 @ 3:00 PM - F1",
        gameThree: "Game 3",
        gameThreeInfo: "6/29/2025 @ 10:00 AM - F1",
        gameFour: "Game 4",
        // gameFourNext: "Loser to C",
        gameFourInfo: "6/29/2025 @ 3:00 PM - F1",
        // gameFive: "Game 5",
        // gameFiveMoreInf: "(IF NECESSARY) ",
        // gameFiveInfo: "7/1/2024 @ 8:00 PM - TJB",
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
        // fiveTopScore: fiveTopScore,
        // fiveBottomScore: fiveBottomScore,
        winnOne: winnOne,
        winnTwo: winnTwo,
        winnThree: winnThree,
        // winnFour: winnFour,
        winnChampion: winnChampion,                            
        loserOne:loserOne,
        loserTwo:loserTwo,
        // loserFour:loserFour,
    }]

    return(<>
    <Scoreboard9U />
    <hr />
    {nineMinors.length > 0 && <BracketThree bracket={nineMinors} info={info} />}
    
    </>)
}
export default MinorsBracket_9
