var hi = "...doing great, buhd!";
console.log(hi);
// time variables using moment.js
var time = moment().hour();
var date = moment().format("MMMM Do YYYY");
var currentHour = moment().format("H");
var eachHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

$("#currentDay").append(date);

// show what has past present and what has not 
// ??????????take time of day ... change attribute to css style  past/present/future
// ??????????take current time > currentHour / time?
function changeColors() {
    hour = time;
    // hour = current time i.e. 11
    console.log(hour);
    $(".time-block").each(function () {
        // run each function on every instance of time-block 
        var thisHour = parseInt($(this).attr("id"));
        console.log(thisHour);
        // thisHour = time-blocks corresponding id# i.e. 9
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
// save to local: all input on each given hour
// save button on click to save .description input 
// class = .description is our text input
var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var timeOfday = $(this).parent().attr("id");
    // time of day is = the parent elements ( save btn ) id #
    var textContent = $(this).siblings(".description").val();
    // content is the the sibling of the save saveBtn, our text area 

    localStorage.setItem(timeOfday, textContent);
    console.log(timeOfday, textContent);
});



// render to html 
// take from local storage and display/render  .getItem
function renderPlans() {
    $(".time-block").each(function () {
        var divEl = $(this).attr("id");
        // same routine as we did to save the items
        var textContent = localStorage.getItem(divEl);

        if (textContent !== null) {
            $(this).children(".description").val(textContent);
        }
    });
}

renderPlans();
