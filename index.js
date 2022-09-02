const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(yearsAndResults){
    const result = yearsAndResults.find(record => record.result === "W");
    return result ? result.year : undefined
}


// function superbowlWin(yearsAndResults){
//     return yearsAndResults.find(isWin).year
// }

// function isWin(gameData){
//     // let result = undefined
//     //  for (let year of record){
//     //     if (gameData.result === "W" ){
//     //         result = year
//     //     }
//     //  }
//      if (gameData.result ==="W") {
//          return true;
//     } else {
//          return false;
//     }
//  }



