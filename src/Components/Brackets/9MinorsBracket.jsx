import BracketThree from "../BracketTemplates/BracketThree";

function MinorsBracket_9(){
    const info = [{
        id: 1,
        division: "Minor Baseball (9)",
        site: "Tee Joe Park",
        address: "524 W. Orice Roth Rd, Gonzales LA 70737",
        phone: "225-270-5420 | 225-223-9470",
        director: "Conrad Gayle | Wayne Grenfell",
        next: "LA Little League State Tournament",
        nextAddress: "St. Julien Park - Broussard, La | July 19th, 2024",
      }]
    const elevenMinorsTeams = {
        one: "AP - Navy",
        two: "Eastbank",
        three: "AP - Red",
    }

    //GAME 1
    const oneTopScore = 0;
    const oneBottomScore = 0;
    const winnOne = oneTopScore !== oneBottomScore ? (oneTopScore > oneBottomScore ? elevenMinorsTeams.one : elevenMinorsTeams.two) : "";
    const loserOne =  oneTopScore !== oneBottomScore ? (oneTopScore < oneBottomScore ? elevenMinorsTeams.one : elevenMinorsTeams.two) : "A";
    
    //GAME 2
    const twoTopScore = 0;
    const twoBottomScore = 0;
    const winnTwo = twoTopScore !== twoBottomScore ? (twoTopScore > twoBottomScore ? winnOne : elevenMinorsTeams.three) : "";
    const loserTwo = twoTopScore !== twoBottomScore ? (twoTopScore < twoBottomScore ? winnOne : elevenMinorsTeams.three) : "B";
    
    //GAME 3
    const threeTopScore = 0;
    const threeBottomScore = 0;
    const winnThree = threeTopScore !== threeBottomScore ? (threeTopScore > threeBottomScore ? loserOne : loserTwo) : "";

    //GAME 4
    const fourTopScore = 0;
    const fourBottomScore = 0;
    const winnFour = fourTopScore !== fourBottomScore ? (fourTopScore > fourBottomScore ? winnTwo : winnThree) : " " ;
    const loserFour = fourTopScore !== fourBottomScore ? (fourTopScore < fourBottomScore ? winnTwo : null) : "C" ;

    //GAME 5
    const fiveTopScore = 0;
    const fiveBottomScore =  loserFour !== null ? 0: " ";
    const winnChampion =  winnFour !== winnTwo 
                ? ( fiveTopScore !== fiveBottomScore ? (fiveTopScore > fiveBottomScore ? winnFour : loserFour) : "9U Minors") 
                : winnFour;

    const elevenMinors =  [{  id: 1,
        gameOne: "Game 1",
        gameOneNext: "Loser to A",
        gameOneInfo: "6/29/2024 @ 11:00 AM - TJB",
        gameTwo: "Game 2",
        gameTwoNext: "Loser to B",
        gameTwoInfo: "6/30/2024 @ 11:00 AM - TJB",
        gameThree: "Game 3",
        gameThreeInfo: "6/30/2024 @ 2:00 PM - TJB",
        gameFour: "Game 4",
        gameFourNext: "Loser to C",
        gameFourInfo: "7/1/2024 @ 6:00 PM - TJB",
        gameFive: "Game 5",
        gameFiveMoreInf: "(IF NECESSARY) ",
        gameFiveInfo: "7/1/2024 @ 8:00 PM - TJB",
        teamOne: elevenMinorsTeams.one,
        teamTwo: elevenMinorsTeams.two, 
        teamThree: elevenMinorsTeams.three,
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
        winnOne: winnOne,
        winnTwo: winnTwo,
        winnThree: winnThree,
        winnFour: winnFour,
        winnChampion: winnChampion,                            
        loserOne:loserOne,
        loserTwo:loserTwo,
        loserFour:loserFour,
    }]

    return(<>{elevenMinors.length > 0 && <BracketThree bracket={elevenMinors} info={info} />}</>)
}
export default MinorsBracket_9