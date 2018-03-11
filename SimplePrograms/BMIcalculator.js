var BMI_height_weight, weight, height_ft, height_in;

weight = prompt("Enter Weight in (lbs): ");
height_ft = parseInt(prompt("Enter Ft): "));
height_in = parseInt(prompt("Enter in): "));
//var ft = parseInt(height_ft);
//var inch = parseInt(height_in);
height_in = (height_in) + (height_ft*12);
//console.log(height_in);
var lbs_kg = weight * 0.453593;
var ft_m = height_in / 39.37008;
BMI_height_weight =(lbs_kg / Math.pow(ft_m,2));
console.log(`Your weight is ${lbs_kg.toFixed(2)}kg`);
console.log(`Your Height is ${ft_m.toFixed(2)}m`);
console.log(`BMI is ${BMI_height_weight.toFixed(2)}`);