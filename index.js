const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record) {
    let winningYear = record.find(record => record.result === "W");
     if (winningYear) {
        return winningYear.year;
    }
}