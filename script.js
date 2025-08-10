let user = {};

user.gender = prompt("What's your gender (male/female)?");
user.age = prompt("How old are you?");
user.height = prompt("What's your height in cm?");
user.weight = prompt("What's your weight in kg?");
user.physicalActivity = prompt("What's your level of physical activity (sedentary/light/moderate/heavy)?");
user.foodPreference = prompt("Do you have any food preference?");
user.foodRestriction = prompt("Do you have any food restriction?");

let menBMR = 66.47 + (13.75 * Number(user.weight)) + (5.003 * Number(user.height)) - (6.755 * Number(user.age));
let womenBMR = 655.1 + (9.563 * Number(user.weight)) + (1.850 * Number(user.height)) - (4.676 * Number(user.age));
let caloriesIntake;



if (user.gender == "male") {
    caloriesIntake = menBMR;
}
else if (user.gender == "female") {
    caloriesIntake = womenBMR;
}


//foods for breakfast
let biscuits = {
    caloriesPer100g: 353,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let cornflakes = {
    caloriesPer100g: 357,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let yoghurt = {
    caloriesPerServing: 124,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let milk = {
    caloriesPer200ml: 124,
    proteins: 10,
    carbs: 10,
    fats: 10
};

// foods for lunch and dinner
let whiteRice = {
    caloriesPer100g: 330,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let tomatoSaucePasta = {
    caloriesPer100g: 360,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let dressedGreenSalad = {
    caloriesPerServing: 150,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let dressedMixedSalad = {
    caloriesPerServing: 180,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let grilledChickenBreast = {
    caloriesPer100g: 170,
    proteins: 10,
    carbs: 10,
    fats: 10
};
let bread = {
    caloriesPer100g: 265,
    proteins: 10,
    carbs: 10,
    fats: 10
};

let apple = {
    caloriesPer100g: 49,
    proteins: 10,
    carbs: 10,
    fats: 10
};



/*Meal calculator
- breakfast
- lunch
- dinner */

let suggestedBreakfast;
let suggestedLunch;
let suggestedDinner;


const breakfastOption1 = ["milk", " biscuits"];
const breakfastOption2 = ["milk", " cornflakes"];
const breakfastOption3 = ["yoghurt", " cornflakes"];

const lunchOption1 = ["dressedGreenSalad", " bread", " grilledChickenBreast"];
const lunchOption2 = ["dressedMixedSalad", " bread", " grilledChickenBreast"];
const lunchOption3 = ["tomatoSaucePasta", " dressedGreenSalad"];
const lunchOption4 = ["whiteRice", " dressedGreenSalad", " apple"];

const dinnerOption1 = ["dressedGreenSalad", " bread", " grilledChickenBreast"];
const dinnerOption2 = ["dressedMixedSalad", " bread", " grilledChickenBreast"];
const dinnerOption3 = ["tomatoSaucePasta", " dressedGreenSalad"];
const dinnerOption4 = ["whiteRice", " dressedGreenSalad", " apple"];

const breakfastOption1Kcal = milk.caloriesPer200ml + biscuits.caloriesPer100g;
const breakfastOption2Kcal = milk.caloriesPer200ml + cornflakes.caloriesPer100g;
const breakfastOption3Kcal = yoghurt.caloriesPerServing + cornflakes.caloriesPer100g;

const lunchOption1Kcal = dressedGreenSalad.caloriesPerServing + bread.caloriesPer100g + grilledChickenBreast.caloriesPer100g;
const lunchOption2Kcal = dressedMixedSalad.caloriesPerServing + bread.caloriesPer100g + grilledChickenBreast.caloriesPer100g;
const lunchOption3Kcal = tomatoSaucePasta.caloriesPer100g + dressedGreenSalad.caloriesPerServing;
const lunchOption4Kcal = whiteRice.caloriesPer100g + dressedGreenSalad.caloriesPerServing + apple.caloriesPer100g;

const dinnerOption1Kcal = lunchOption1Kcal;
const dinnerOption2Kcal = lunchOption2Kcal;
const dinnerOption3Kcal = lunchOption3Kcal;
const dinnerOption4Kcal = lunchOption4Kcal;


if (breakfastOption1.includes(user.foodPreference) && !breakfastOption1.includes(user.foodRestriction)) {
    suggestedBreakfast = breakfastOption1;
}
else if (breakfastOption2.includes(user.foodPreference) && !breakfastOption2.includes(user.foodRestriction)) {
    suggestedBreakfast = breakfastOption2;
}
else if (breakfastOption3.includes(user.foodPreference) && !breakfastOption3.includes(user.foodRestriction)) {
    suggestedBreakfast = breakfastOption3;
}
else if (user.foodPreference === "" || user.foodRestriction === "") {
    suggestedBreakfast = breakfastOption1;
}
else {
    suggestedBreakfast = breakfastOption1;
}


if (lunchOption1.includes(user.foodPreference) && !lunchOption1.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption1;
}
else if (lunchOption2.includes(user.foodPreference) && !lunchOption2.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption2;
}
else if (lunchOption3.includes(user.foodPreference) && !lunchOption3.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption3;
}
else if (lunchOption4.includes(user.foodPreference) && !lunchOption4.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption4;
}
else if (user.foodPreference === "" || user.foodRestriction === "") {
    suggestedLunch = lunchOption1;
}
else {
    suggestedLunch = lunchOption1;
}


if (dinnerOption1.includes(user.foodPreference) && !dinnerOption1.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption1;
}
else if (dinnerOption2.includes(user.foodPreference) && !dinnerOption2.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption2;
}
else if (dinnerOption3.includes(user.foodPreference) && !dinnerOption3.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption3;
}
else if (dinnerOption4.includes(user.foodPreference) && !dinnerOption4.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption4;
}

else if (user.foodPreference === "" || user.foodPreference === "") {
    suggestedDinner = dinnerOption1;
}
else {
    suggestedDinner = dinnerOption1;
}

alert(suggestedBreakfast);
alert(typeof suggestedBreakfast);
alert(suggestedLunch);
alert(typeof suggestedLunch);
alert(suggestedDinner);
alert(typeof suggestedDinner);



// let sedentaryWomenBMR = womenBMR * 1.2;
// let lightActiveWomenBMR = womenBMR * 1.375;
// let moderatelyActiveWomenBMR = womenBMR * 1.55;
// let heavilyActiveWomenBMR = womenBMR * 1.9;

