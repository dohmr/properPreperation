var hi = "...doing great, buhd!";
console.log(hi);
// moment().toDate();
// get Time and display in jumbo?
var date = moment().format("MMMM Do YYYY");
console.log(date);
var currentHour = moment().format("H");
console.log(currentHour);

var eachHour = [ $("#9"), "10", "11", "12", "13", "14", "15", "16", "17"]
// $(".description").text("Coffee???");
$("#currentDay").append(date);
// $(".lead").append(currentTime);
console.log(eachHour);
// save to local all input on each given hour
// ????????????????save button on click to save .description input 
// ???????????class = .description is our text input?????????
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var timeOfday = $(this).parent().attr("id");
    var textContent = $(this).siblings(".description").val();

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});

// function renderPlans() {
//     var timeOfday = $(this).parent().attr("id");
//     var textContent = localStorage.getItem(timeOfday, textContent);

    
//     console.log(timeOfday, textContent);
// }
// saveBtn.on("click", function () {
//     var hour = $(this).parent().attr("id");
//     var task = $(this).siblings(".description").val();

//     localStorage.setItem(hour, task);
//     console.log(hour, task);
// });

// render to html 
// take from local storage and display/render  .getItem("hour-9")

// show what has past present and what has not 
// ??????????make times of day variable numbers associated with their hour ?   eachHour
// ??????????take time of day ... change attribute to css style  past/present/future
// ??????????take current time > currentHour


function highlights() {
    for (var i = 0; i < eachHour.length; i++) {
        if (eachHour[i] > currentHour) {
            $(this).addClass("future")
        }
        else if (eachHour[i] === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    }
}
