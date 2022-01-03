const VillageState = require('../village');
const { runRobot, randomRobot, routeRobot, goalOrientedRobot } = require('../robot');
const roadGraph = require('../roads');
const { compareRobots } = require('../01 - Measuring a Robot');

function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

function closestParcel(graph, from, parcels) {
  const steps = [];
  for (parcel of parcels) {
    const route = findRoute(graph, from, parcel.place !== from ? parcel.place : parcel.address);
    steps.push(route.length);
  }
  const shortestRouteIndex = steps.indexOf(Math.min(...steps));
  return parcels[shortestRouteIndex];
}

function efficientRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = closestParcel(roadGraph, place, parcels);
    if (parcel.place != place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

function lazyRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let routes = parcels.map(parcel => {
      if (parcel.place != place) {
        return {
          route: findRoute(roadGraph, place, parcel.place),
          pickUp: true
        };
      } else {
        return {
          route: findRoute(roadGraph, place, parcel.address),
          pickUp: false
        };
      }
    });

    function score({ route, pickUp }) {
      return (pickUp ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
  }

  return { direction: route[0], memory: route.slice(1) };
}

// compareRobots(efficientRobot, [], lazyRobot, []);

module.exports = { efficientRobot, lazyRobot };