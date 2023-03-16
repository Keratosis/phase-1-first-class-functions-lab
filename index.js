// Code your solution in this file!
const drivers = ["Antonia","Nuru","Amari","Mo"]

const  returnFirstTwoDrivers = function(){
     return ["Antonia","Nuru"]
}
returnFirstTwoDrivers()

const returnLastTwoDrivers  = function(){
    return ["Amari","Mo"]
}
const selectingDrivers =  [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function(fare){
      return fare * integer;
}
}
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}
function selectDifferentDrivers(drivers,returnLastTwoDrivers){
    return returnLastTwoDrivers(drivers)
}