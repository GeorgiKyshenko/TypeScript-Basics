let scores: number[] = [1, 5, 10, 4, 5, 7];
scores.push(4, 3, 12);
let sumScores = 0;

for (let i = 0; i < scores.length; i++) {
  sumScores += scores[i];
  console.log(scores[i]);
}

let averageScore = sumScores / scores.length;
console.log(averageScore);
