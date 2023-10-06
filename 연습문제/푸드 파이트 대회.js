function removeOddNum(food) {
  const newFood = [];
  food.forEach((f) => {
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
  let place = "";
  food.forEach((num, c) => {
    for (let i = 0; i < num / 2; i++) {
      place += c;
    }
  });
  if (location === "right") place = place.split("").reverse().join("");
  return place;
}
function solution(food) {
  const newFood = removeOddNum(food);
  return placement(newFood, "left") + "0" + placement(newFood, "right");
}
