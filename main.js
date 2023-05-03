//Functioning the next and previous button

let count=0;
document.getElementById("pre").style.display="none";
document.getElementById("next").onclick=()=>{
  count++;
  
  console.log(count);
  switch (count){
    case 0:
      document.getElementById("pre").style.display="none";
      document.getElementById("dpdn").style.display="flex";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
    case 1:
      document.getElementById("pre").style.display="block";
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="flex";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 2:
      console.log(count);
      
      document.getElementById("pre").style.display="block";
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="flex";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 3:
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="flex";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 4:
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="flex";
      document.getElementById("dpdn5").style.display="none";
      document.getElementById("next").style.display="block";
      break;
    case 5:
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="flex";
      document.getElementById("next").style.display="none";
      break;
    case 6:
      
      console.log(count);
      document.getElementById("pre").style.display="block";
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="flex";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      count=1;
      break;
  }
},{
  duration: 3000,
  fill: "forwards",
  easing: "ease"
}
document.getElementById("pre").onclick=()=>{
  count--;
  switch (count){
    case 0:
      document.getElementById("pre").style.display="none";
      document.getElementById("dpdn").style.display="flex";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      count=5;
      break;
    case 1:

      document.getElementById("pre").style.display="block";
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="flex";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 2:
      console.log(count);
      
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="flex";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 3:
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="flex";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      break;
    case 4:
      console.log(count);
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="flex";
      document.getElementById("dpdn5").style.display="none";
      document.getElementById("next").style.display="block";
      break;
    case 5:
      console.log(count);
      document.getElementById("pre").style.display="none";
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="none";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="flex";
      document.getElementById("next").style.display="block";
      break;
    case 6:
      count=1;
      console.log(count);
      document.getElementById("pre").style.display="block";
      document.getElementById("dpdn").style.display="none";
      document.getElementById("dpdn1").style.display="flex";
      document.getElementById("dpdn2").style.display="none";
      document.getElementById("dpdn3").style.display="none";
      document.getElementById("dpdn4").style.display="none";
      document.getElementById("dpdn5").style.display="none";
      document.getElementById("next").style.display="none";
      break;
  }
}

//Get form elements
const form = document.querySelector('form');
const transportationType = form.elements['transportation-type'];
const distanceTraveled = form.elements['distance-traveled'];
const frequencyOfTravel = form.elements['frequency-of-travel'];
const fuelEfficiency = form.elements['fuel-efficiency'];
const electricityUse = form.elements['electricity-use'];
const heatingFuelUse = form.elements['heating-fuel-use'];
const meatUse = form.elements['meat-use'];
const dairyUse = form.elements['dairy-use'];
const lpgUse = form.elements['lpg'];
const trash = form.elements['trash-prod'];
const recycle = form.elements['recycle'];
const water = form.elements['water-use'];
const secondHand = form.elements['second-hand'];
const reusableCont = form.elements['reusable-cont'];
const airTravel = form.elements['air-travel'];


const emissionsFactors = {
  car: 0.255,
  bus: 0.1905, 
  train: 0.082, 
  airplane: 0.4115, 
  electricity: 1.37, 
  heatingFuel: 5.969,
  meat: 27.0, 
  dairy: 3.2, 
  lpg: 3.15,
  waste: 0.3, 
  recycling: -0.5, 
  vegetarian: -4.83, 
  water: 0.29
};



// Calculate transportation emissions
document.getElementById("transportation-type").onchange=()=>{
  if(transportationType.value=='car'){
    document.getElementById("fuelEff").style.display="block";
   
  }else{
    document.getElementById("fuelEff").style.display="none";
    fuelEfficiency.value=1;
  }
}
function transportationEmissions(){
  const milesTraveled = distanceTraveled.value;
  let frequency = frequencyOfTravel.value;
  const fuelEfficiencyValue = fuelEfficiency.value;

  let emissionsFactor = 0;
  switch (transportationType.value) {
    case 'car':
      emissionsFactor = emissionsFactors.car;
    
      break;
    case 'bus':
      emissionsFactor = emissionsFactors.bus;
      break;
    case 'train':
      emissionsFactor = emissionsFactors.train;
      break;
    case 'airplane':
      emissionsFactor = emissionsFactors.airplane;
      break;
  }
  switch (frequency){
    case 'daily':
      frequency=1;
      break;
    case 'weekly':
      frequency=7;
      break;
    case 'monthly':
      frequency=30;
      break;
    case 'annually':
      frequency=365;
      break;
  }
  const gallonsOfFuel = milesTraveled / fuelEfficiencyValue;
  const totalEmissions = gallonsOfFuel * emissionsFactor * frequency;
  console.log("Transportation: "+totalEmissions+"\nFuel: "+gallonsOfFuel+"\nemissionsFactor: "+emissionsFactor+"\nfreq: "+frequency);
  return totalEmissions;
};

// Calculate energy emissions
function energyEmissions(){
  const electricityUseValue = electricityUse.value;
  const heatingFuelUseValue = heatingFuelUse.value;
  
  const electricityEmissions = electricityUseValue * emissionsFactors.electricity;
  const heatingFuelEmissions = heatingFuelUseValue * emissionsFactors.heatingFuel;


  const totalEmissions = electricityEmissions + heatingFuelEmissions;
  console.log("Energy: "+totalEmissions);
  return totalEmissions;
};
// Function to calculate emissions from food choices
function calcFoodEmissions() {
  const meatUseValue = meatUse.value;
  const dairyUseValue = dairyUse.value;
  const lpgUseValue =  lpgUse.value;
  const emissions = meatUseValue * emissionsFactors.meat + dairyUseValue * emissionsFactors.dairy + lpgUseValue * emissionsFactors.lpg;
  console.log("Food: "+ emissions);
  return emissions;
}
// Function to calculate emissions from waste disposal
function calcWasteEmissions() {
  const trashValue = trash.value;
  const recycleValue = recycle.value;
  const emissions = (trashValue - recycleValue) * emissionsFactors.trash;
  console.log("Waste: "+emissions);
  return emissions;
}
// Function to calculate emissions from other lifestyle factors
function calcLifestyleEmissions() {
  const waterValue = water.value;
  const airTravelValue = airTravel.value;

  const airTravelEmissions = airTravelValue * emissionsFactors.airplane;
  const waterEmissions = waterValue * emissionsFactors.water;
  //both checkboxes will be functioned in the later updates
  const emissions = waterEmissions + airTravelEmissions;
  console.log("others: "+emissions);
  return emissions;
}
// Calculate total carbon footprint
function calculateCarbonFootprint(){
  const transportationEmissionsValue = transportationEmissions();
  const energyEmissionsValue = energyEmissions();
  const foodEmissionsValue = calcFoodEmissions();
  let totalCarbonFootprint = transportationEmissionsValue + energyEmissionsValue + foodEmissionsValue;
  totalCarbonFootprint/=1000;
  return totalCarbonFootprint;
};

//Final Evaluation
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const carbonFootprint = calculateCarbonFootprint();
  document.getElementById("dpdn5").style.display="none";
  console.log(`Your carbon footprint is ${carbonFootprint} metric tons of CO2 per year.`);
  document.getElementById("dpdn6").style.display="flex";
  document.getElementById("display").innerHTML+=`Your carbon footprint is <b>${carbonFootprint}</b> metric tons of CO<sub>2</sub> per year.`;
});
