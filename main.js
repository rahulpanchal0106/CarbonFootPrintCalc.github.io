//Functioning the next and previous button

document.getElementById("pre").style.display="none";
document.getElementById("next").onclick=()=>{
  document.getElementById("pre").style.display="block";
  document.getElementById("next1").onclick=()=>{
    document.getElementById("dpdn").style.display="none";
      document.getElementById("cont1").style.display="block";
      document.getElementById("dpdn1").style.display="flex";
  }
  document.getElementById("next2").onclick=()=>{
    document.getElementById("cont2").style.display="block";
      document.getElementById("dpdn2").style.display="flex";
  }
  document.getElementById("next3").onclick=()=>{
    document.getElementById("dpdn3").style.display="flex";
    document.getElementById("cont3").style.display="block";
  }
  document.getElementById("next4").onclick=()=>{
    document.getElementById("dpdn4").style.display="flex";
    document.getElementById("cont4").style.display="block";
  }
  document.getElementById("next5").onclick=()=>{
    document.getElementById("dpdn5").style.display="flex";
    document.getElementById("cont5").style.display="block";
  }

}
// Get form elements
// const form = document.querySelector('form');
// const transportationType = form.elements['transportation-type'];
// const distanceTraveled = form.elements['distance-traveled'];
// const frequencyOfTravel = form.elements['frequency-of-travel'];
// const fuelEfficiency = form.elements['fuel-efficiency'];
// const electricityUse = form.elements['electricity-use'];
// const heatingFuelUse = form.elements['heating-fuel-use'];
// const otherEnergyUse = form.elements['other-energy-use'];

// Define constants for emissions factors
const emissionsFactors = {
  car: 0.404,
  bus: 0.118,
  train: 0.051,
  airplane: 0.257,
  electricity: 1.37,
  heatingFuel: 22.4
};

// Calculate transportation emissions
const transportationEmissions = () => {
  const milesTraveled = distanceTraveled.value;
  const frequency = frequencyOfTravel.value;
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

  const gallonsOfFuel = milesTraveled / fuelEfficiencyValue;
  const totalEmissions = gallonsOfFuel * emissionsFactor * frequency;
  return totalEmissions;
};

// Calculate energy emissions
const energyEmissions = () => {
  const electricityUseValue = electricityUse.value;
  const heatingFuelUseValue = heatingFuelUse.value;
  const otherEnergyUseValue = otherEnergyUse.value;

  const electricityEmissions = electricityUseValue * emissionsFactors.electricity;
  const heatingFuelEmissions = heatingFuelUseValue * emissionsFactors.heatingFuel;
  const otherEnergyEmissions = otherEnergyUseValue;

  const totalEmissions = electricityEmissions + heatingFuelEmissions + otherEnergyEmissions;
  return totalEmissions;
};

// Calculate total carbon footprint
const calculateCarbonFootprint = () => {
  const transportationEmissionsValue = transportationEmissions();
  const energyEmissionsValue = energyEmissions();

  const totalCarbonFootprint = transportationEmissionsValue + energyEmissionsValue;
  return totalCarbonFootprint;
};

// Handle form submission
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const carbonFootprint = calculateCarbonFootprint();
//   console.log(`Your carbon footprint is ${carbonFootprint} metric tons of CO2 per year.`);
// });
