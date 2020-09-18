var hi = "...doing great, buhd!";
console.log(hi);
// get Time and display in jumbo?
var date = moment().format("MMMM Do YYYY");
console.log(date);
var currentTime = moment().format("H m s");
console.log(currentTime);

var eachHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

$("#currentDay").append(date);
// $(".lead").append(currentTime);

// save to local all input on each given hour
// ????????????????save button on click to save .description input 
// ???????????class = .description is our text input?????????

// render to html 
// take from local storage and display/render  .getItem("hour-9")

// show what has past present and what has not 
// ??????????make times of day variable numbers associated with their hour?
// ??????????take time of day ... change attribute to css style 
// ??????????take time of day and subtract ? for past ? for 'future' ?    if / else ??

$(".description").text("Coffee???");
