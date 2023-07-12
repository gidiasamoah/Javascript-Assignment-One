let selectedPlan = prompt("Enter your selected plan (Basic, Standard, or Premium): ");
let personalTrainer = prompt("Do you want to include the Personal Trainer option? (yes or no): ");
let mealPlan = prompt("Do you want to include the Meal Plan option? (yes or no): ");

let baseCost = 0;
let optionsCost = 0;

console.log("Subscription Plan Calculator");

switch (selectedPlan) {
  case "Basic":
    baseCost = 10;
    console.log("Selected plan: Basic");
    break;
  case "Standard":
    baseCost = 15;
    console.log("Selected plan: Standard");
    break;
  case "Premium":
    baseCost = 20;
    console.log("Selected plan: Premium");
    break;
  default:
    console.log("Invalid plan selection.");
    break;
}

if (personalTrainer === "yes") {
  optionsCost += 5;
  console.log("Added Personal Trainer option: $5");
} else {
  console.log("Excluded Personal Trainer option");
}

if (mealPlan === "yes") {
  optionsCost += 8;
  console.log("Added Meal Plan option: $8");
} else {
  console.log("Excluded Meal Plan option");
}

if (personalTrainer === "yes" && mealPlan === "yes") {
  optionsCost -= 3;
  console.log("Discount applied: -$3");
}

let totalCost = baseCost + optionsCost;

console.log("Base Cost:", baseCost);
console.log("Options Cost:", optionsCost);
console.log("Total Cost:", totalCost);