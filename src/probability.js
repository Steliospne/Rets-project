export default function probability(externalVariables = 1) {
  let startingValue = 720;
  const bonusDonutProbability =
    externalVariables === 1 ? 0.15 : externalVariables[0];
  const bonusTwoDonutsProbability =
    externalVariables === 1 ? 0.05 : externalVariables[1];
  const spinAgainProbability =
    externalVariables === 1 ? 0.45 : externalVariables[2];
  let spinAgain = true;
  let spin;
  spin = Math.random();
  if (spin < bonusTwoDonutsProbability) {
    spin =
      240 +
      Math.floor(Math.random() * 28) *
        (Math.round(Math.random()) === 0 ? 1 : -1);
    spinAgain = false;
  } else if (spin < bonusDonutProbability) {
    spin =
      60 +
      Math.floor(Math.random() * 28) *
        (Math.round(Math.random()) === 0 ? 1 : -1);
    spinAgain = false;
  } else if (spin < spinAgainProbability) {
    spin =
      180 +
      Math.floor(Math.random() * 28) *
        (Math.round(Math.random()) === 0 ? 1 : -1);
    spinAgain = true;
  } else {
    spin =
      300 +
      Math.floor(Math.random() * 28) *
        (Math.round(Math.random()) === 0 ? 1 : -1);
    spinAgain = false;
  }
  return [spin + startingValue, spinAgain];
}
