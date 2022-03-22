const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (){
return drivers.slice(-4,-2)
}
returnFirstTwoDrivers(drivers)


const returnLastTwoDrivers = function (){
return drivers.slice(-2)
}
returnLastTwoDrivers(drivers)

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return integer * fare;
    }
}
const fareDoubler = function(x) {
    return x*2
}
const fareTripler = function(y) {
    return y*3
}

const selectDifferentDrivers = function (drivers, x) {
   if (x==returnFirstTwoDrivers) return drivers.slice(-4,-2)
    if (x==returnLastTwoDrivers)return drivers.slice(-2)
} 
