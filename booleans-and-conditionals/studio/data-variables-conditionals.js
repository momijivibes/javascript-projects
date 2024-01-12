// Initialize Variables below

let date = "Monday 2019-03-18"
let time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = "100%"
let weatherStatus = "clear"
let preparedForLiftOff = true


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    console.log("Ready for launch."); 
} else {
    console.log("Not ready for launch.")
}


// add logic below to verify all astronauts are ready

if (astronautStatus == "ready") {
    console.log("Ready for launch.");
} else {
    console.log("Not ready for launch.")
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {
    console.log("Ready for launch.");
} else {
    console.log("Not ready for launch.")
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius <= -150 || fuelTempCelsius >= -300) {
    console.log("Ready for launch.");
} else {
    console.log("Not ready for launch.")
}


// add logic below to verify the fuel level is at 100%

if (fuelLevel = "100%") {
    console.log("Ready for launch.");
} else {
    console.log("Not ready for launch.")
}

// add logic below to verify the weather status is clear

if (weatherStatus = "clear") {
    console.log("Ready for launch.");
} else {
    console.log("Not ready for launch.")
}


// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && astronautStatus == "ready" && totalMassKg <= 850000 && fuelTempCelsius <= -150 || fuelTempCelsius >= -300 && fuelLevel == "100%" && weatherStatus == "clear") {
    console.log("Ready for launch!!!")
} else {
    console.log("Not ready for launch.")
}

if (astronautCount <= 7 && astronautStatus == "ready" && totalMassKg <= 850000 && fuelTempCelsius <= -150 || fuelTempCelsius >= -300 && fuelLevel == "100%" && weatherStatus == "clear") {
    console.log("Ready for launch!!!")
} else {
    console.log("Not ready for launch.")
}


console.log("All systems are a go! Initiating space shuttle launch sequence.")
console.log("----------------------------------------------------------------------")
console.log("Date: "+ date)
console.log("Time: " + time)
console.log("Astronaunt Count: " + astronautCount)
console.log("Crew Mass Kg: " + crewMassKg)
console.log("Fuel Mass Kg: " + fuelMassKg)
console.log("Shuttle Mass Kg: " + shuttleMassKg)
console.log("Total Mass Kg: " + totalMassKg)
console.log("Fuel Temp Celsius" + fuelTempCelsius)
console.log("Weather Status: " + weatherStatus)
console.log("----------------------------------------------------------------------")
console.log("Have a safe flight!!!")



