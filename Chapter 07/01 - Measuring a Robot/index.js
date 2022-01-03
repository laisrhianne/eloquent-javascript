const VillageState = require('../village');
const { randomRobot, routeRobot, goalOrientedRobot } = require('../robot');

function sum(...numbers) {
  return numbers.reduce((ac, el) => ac + el, 0);
}

function runRobot(state, robot, memory) {
  let turn = 0;
  for (turn; ; turn++) {
    if (state.parcels.length == 0) {
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
  return turn;
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const turnsRobot1 = [];
  const turnsRobot2 = [];

  for (let i = 0; i < 100; i++) {
    const state = VillageState.random();
    turnsRobot1.push(runRobot(state, robot1, memory1));
    turnsRobot2.push(runRobot(state, robot2, memory2));
  }
  console.log(`Robot1 average: ${sum(...turnsRobot1) / turnsRobot1.length} | Robot2 average: ${sum(...turnsRobot2) / turnsRobot2.length}`);
}

// compareRobots(routeRobot, [], goalOrientedRobot, []);

module.exports = { compareRobots };