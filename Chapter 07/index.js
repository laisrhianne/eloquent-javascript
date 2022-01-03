const VillageState = require('./village');
const { runRobot, randomRobot, routeRobot, goalOrientedRobot } = require('./robot');

runRobot(VillageState.random(), goalOrientedRobot, []);