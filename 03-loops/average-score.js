"use strict";
var scores = [1, 5, 10, 4, 5, 7];
scores.push(4, 3, 12);
var sumScores = 0;
for (var i = 0; i < scores.length; i++) {
    sumScores += scores[i];
    console.log(scores[i]);
}
var averageScore = sumScores / scores.length;
console.log(averageScore);
