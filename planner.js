var hi = "...doing great, buhd!";
console.log(hi);
// moment().toDate();
// get Time and display in jumbo?
var time = moment().hour();
var date = moment().format("MMMM Do YYYY");
console.log(date);
var currentHour = moment().format("H");
console.log(currentHour);
console.log(time);
var eachHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
// $(".description").text("Coffee???");
$("#currentDay").append(date);
// $(".lead").append(currentTime);

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

function renderPlans() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var description = localStorage.getItem(id);

        if (description !== null) {
            $(this).children(".description").val(description);
        }
    });
}
renderPlans();
// render to html 
// take from local storage and display/render  .getItem("hour-9")

// show what has past present and what has not 
// ??????????make times of day variable numbers associated with their hour ?   eachHour
// ??????????take time of day ... change attribute to css style  past/present/future
// ??????????take current time > currentHour / time?


function changeColors() {
    hour = time;
    console.log(hour);
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));
        console.log(thisHour);
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
        
    })
}

changeColors();
