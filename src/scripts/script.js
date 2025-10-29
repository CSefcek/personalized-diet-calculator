// TODO: valorizzare i campi di questo oggetto a partire dal formData dell'elemento form all'evento submit
//       1. aggiungere un addEventListener per l'evento submit dell'elemento form (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
//       2. leggere dall'elemento form i dati tramite l'API formData (https://developer.mozilla.org/en-US/docs/Web/API/FormData)
//       3. valorizzare l'oggetto user con i dati del formData

const body = document.querySelector("body");
const form = document.querySelector("form");
const log = document.createElement("p");

let user = {};

function logSubmit(event) {
    // prevent the button to submit the form
    event.preventDefault();
    // form.style.display = "none";
    // log.textContent = "Form Submitted!";
    // body.appendChild(log);
    
    const formData = new FormData(form);
    user = Object.fromEntries(formData.entries());
    console.log(JSON.stringify(user, null,"  "));
    const result = form.elements["result"];
    result.innerHTML = JSON.stringify(user);
}

form.addEventListener("submit", logSubmit);

// user.gender = prompt("What's your gender (male/female)?");
// user.age = prompt("How old are you?");
// user.height = prompt("What's your height in cm?");
// user.weight = prompt("What's your weight in kg?");
// user.physicalActivity = prompt("What's your level of physical activity (sedentary/light/moderate/heavy)?");
// user.foodPreference = prompt("Do you have any food preference?");
// user.foodRestriction = prompt("Do you have any food restriction?");



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

let suggestedBreakfastKcal;
let suggestedLunchKcal;
let suggestedDinnerKcal;


const breakfastOption1 = ["milk (200ml)", " biscuits (100g)"];
const breakfastOption2 = ["milk (200ml)", " cornflakes (100g)"];
const breakfastOption3 = ["yoghurt (125g)", " cornflakes (100g)"];

const lunchOption1 = ["Dressed green salad (1 bowl)", " bread (100g)", " grilled chicken breast (100g)"];
const lunchOption2 = ["Dressed mixed salad (1 bowl)", " bread (100g)", " grilled chicken breast (100g)"];
const lunchOption3 = ["Tomato sauce pasta (100g)", " dressed green salad (1 bowl)"];
const lunchOption4 = ["White rice (100g)", " dressed green salad (1 bowl)", " an apple"];

const dinnerOption1 = ["Dressed green salad (1 bowl)", " bread (100g)", " grilled chicken breast (100g)"];
const dinnerOption2 = ["Dressed mixed salad (1 bowl)", " bread (100g)", " grilled chicken breast (100g)"];
const dinnerOption3 = ["Tomato sauce pasta (100g)", " dressed green salad (1 bowl)"];
const dinnerOption4 = ["White rice (100g)", " dressed green salad (1 bowl)", " an apple"];

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

suggestedBreakfast = breakfastOption1;
suggestedBreakfastKcal = breakfastOption1Kcal;

if (breakfastOption2.includes(user.foodPreference) && !breakfastOption2.includes(user.foodRestriction)) {
    suggestedBreakfast = breakfastOption2;
    suggestedBreakfastKcal = breakfastOption2Kcal;
}
else if (breakfastOption3.includes(user.foodPreference) && !breakfastOption3.includes(user.foodRestriction)) {
    suggestedBreakfast = breakfastOption3;
    suggestedBreakfastKcal = breakfastOption3Kcal;
}


suggestedLunch = lunchOption1;
suggestedLunchKcal = lunchOption1Kcal;

if (lunchOption2.includes(user.foodPreference) && !lunchOption2.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption2;
    suggestedLunchKcal = lunchOption2Kcal;
}
else if (lunchOption3.includes(user.foodPreference) && !lunchOption3.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption3;
    suggestedLunchKcal = lunchOption3Kcal;
}
else if (lunchOption4.includes(user.foodPreference) && !lunchOption4.includes(user.foodRestriction)) {
    suggestedLunch = lunchOption4;
    suggestedLunchKcal = lunchOption4Kcal;
}


suggestedDinner = dinnerOption1;
suggestedDinnerKcal = dinnerOption1Kcal;

if (dinnerOption2.includes(user.foodPreference) && !dinnerOption2.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption2;
    suggestedDinnerKcal = dinnerOption2Kcal;
}
else if (dinnerOption3.includes(user.foodPreference) && !dinnerOption3.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption3;
    suggestedDinnerKcal = dinnerOption3Kcal;
}
else if (dinnerOption4.includes(user.foodPreference) && !dinnerOption4.includes(user.foodRestriction)) {
    suggestedDinner = dinnerOption4;
    suggestedDinnerKcal = dinnerOption4Kcal;
}



if (caloriesIntake >= (suggestedBreakfastKcal + suggestedLunchKcal + suggestedDinnerKcal)) {
    alert(`Your breakfast is: ${suggestedBreakfast}.`);
    alert(`Your lunch is: ${suggestedLunch}.`);
    alert(`Your dinner is: ${suggestedDinner}.`);
}
// else {
//     alert(`You better fast, there is no meal for your case!`);
// }

// alert("Thanks for using this diet calculator!")



// let sedentaryWomenBMR = womenBMR * 1.2;
// let lightActiveWomenBMR = womenBMR * 1.375;
// let moderatelyActiveWomenBMR = womenBMR * 1.55;
// let heavilyActiveWomenBMR = womenBMR * 1.9;

