"use strict";

function solution(people, limit) {
  var descPeople = people.sort(function (a, b) {
    return b - a;
  });
  var boatCount = 0;
  descPeople.forEach(function (people) {
    if (people + descPeople.at(-1) > limit) {
      //
      boatCount++;
    } else {
      descPeople.pop();
      boatCount++;
    }
  });
  console.log(descPeople);
  return boatCount;
}