const players = [
  { name: "Alice", score: 82 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 78 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 91 }
];

const scoreDescPlayers = [...players].sort((a,b) => b.score - a.score);
console.log(`player:${JSON.stringify(players)}`);

const top3Players = scoreDescPlayers
  .slice(0,3)
  .map((player,index) => {
    return `${index + 1}位:${player.name} (${player.score}点)`;
  });

top3Players.forEach(player => console.log(player));