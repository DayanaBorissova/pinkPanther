function calculateDaysSince(date) {

    let currentDate = new Date();
    let targetDate = new Date(date);
    let timeDifference = currentDate - targetDate;
    let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysPassed;
}
//Promenete datata na rajdane s vashata. Change the date of birth with your.
const daysPassed = calculateDaysSince('1991-08-11');
console.log(daysPassed + " days have passed since I was born.");
