"use strict";

function removeOddNum(food) {
  var newFood = [];
  food.forEach(function (f) {
    if (f % 2 === 0) {
      newFood.push(f);
    } else {
      newFood.push(f - 1);
    }
  });
  return newFood;
}

function placement(food, location) {
  //location : left or right
  var place = "";
  food.forEach(function (num, c) {
    for (var i = 0; i < num / 2; i++) {
      place += c;
    }
  });
  if (location === "right") place = place.split("").reverse().join("");
  return place;
}

function solution(food) {
  var newFood = removeOddNum(food);
  return placement(newFood, "left") + "0" + placement(newFood, "right");
}