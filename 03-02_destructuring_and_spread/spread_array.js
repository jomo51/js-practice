const original = ['apple','banana'];

const copied = [...original];
const withGrape = ["🍇", ...original];
const withEmoji = ['🍓', ...original, '🍍'];

console.log(copied);
console.log(withGrape);
console.log(withEmoji);