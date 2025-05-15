const players = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 91 }
];

const scoreDescPlayers = players.sort((a,b) => b.score - a.score);

let rank = 0;
const top3Players = players
  .sort((a,b) => b.score - a.score)
  .slice(0,3)
  .map((player) => {
    rank++;
    return `${rank}位:${player.name} (${player.score}点)`;
  });

top3Players.forEach(player => console.log(player));