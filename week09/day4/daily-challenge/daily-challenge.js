const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

const usernames = []
gameInfo.forEach(elem => usernames.push(`${elem.username}!`))
console.log(usernames)

const winners = []
gameInfo.filter(elem => elem.score > 5)
    .forEach(elem => winners.push(elem.username))
console.log(winners)

const score = gameInfo.reduce((sum, elem) => sum + elem.score, 0)
console.log(score)