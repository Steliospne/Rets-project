export default function probability(externalVariables = 1) {
  let startingValue = 720;
  let Nothings = [144, 216, 324];
  const bonusDonutProbability =
    externalVariables === 1 ? 0.15 : externalVariables[0];
  const bonusTwoDonutsProbability =
    externalVariables === 1 ? 0.05 : externalVariables[1];
  const HugProbability = externalVariables === 1 ? 0.35 : externalVariables[3];

  const spinAgainProbability =
    externalVariables === 1 ? 0.6 : externalVariables[2];
  let result = "Nothing";
  let spin;
  let margin =
    Math.floor(Math.random() * 14) * (Math.round(Math.random()) === 0 ? 1 : -1);
  spin = Math.random();
  let whichSlice = Math.round(Math.random()) === 0 ? 0 : -180;
  if (spin < bonusTwoDonutsProbability) {
    spin = 36 + margin;
    result = "2 Donuts";
  } else if (spin < bonusDonutProbability) {
    spin = 72 + margin + whichSlice;
    result = "Donut";
  } else if (spin < HugProbability) {
    spin = 108 + margin + whichSlice;
    result = "A Hug";
  } else if (spin < spinAgainProbability) {
    spin = 180 + margin + whichSlice;
    result = "Spin Again";
  } else {
    spin = Nothings[Math.round(Math.random() * 3)];
  }

  return [spin + startingValue, result];
}
