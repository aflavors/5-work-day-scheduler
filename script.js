var currentTime = moment().hours();
var saveButton = $(".saveBtn");
console.log(currentTime);

// Display Current Day/Time
$("#currentDay").html(moment().format('LLLL'));

//Object for Time Blocks
let timeBlockObj = {
    "9 AM": 9,
    "10 AM": 10,
    "11 AM": 11,
    "12 PM": 12,
    "1 PM": 13,
    "2 PM": 14,
    "3 PM": 15,
    "4 PM": 16,
    "5 PM": 17
};
//Set Past, Present, Future Classes
function setTimeBlockValue(){

    let Nine = timeBlockObj["9 AM"];
    let Ten = timeBlockObj["10 AM"];
    let Eleven = timeBlockObj["11 AM"];
    let Noon = timeBlockObj["12 PM"];
    let One = timeBlockObj["1 PM"];
    let Two = timeBlockObj["2 PM"];
    let Three = timeBlockObj["3 PM"];
    let Four = timeBlockObj["4 PM"];
    let Five = timeBlockObj["5 PM"];
    
    //9
    if(Nine === currentTime){
        $("#9").addClass("present");
    } else if(Nine < currentTime){
        $("#9").addClass("past");
    } else if(Nine > currentTime){
        $("#9").addClass("future");}
    //10
    if(Ten === currentTime){
        $("#10").addClass("present");
    } else if(Ten < currentTime){
        $("#10").addClass("past");
    } else if(Ten > currentTime){
        $("#10").addClass("future");}
    //11
    if(Eleven === currentTime){
        $("#11").addClass("present");
    } else if(Eleven < currentTime){
        $("#11").addClass("past");
    } else if(Eleven > currentTime){
        $("#11").addClass("future");}
    //Noon
    if(Noon === currentTime){
        $("#12").addClass("present");
    } else if(Noon < currentTime){
        $("#12").addClass("past");
    } else if(Noon > currentTime){
        $("#12").addClass("future");}
    //1
    if(One === currentTime){
        $("#1").addClass("present");
    } else if(One < currentTime){
        $("#1").addClass("past");
    } else if(One > currentTime){
        $("#1").addClass("future");}
    //2
    if(Two === currentTime){
        $("#2").addClass("present");
    } else if(Two < currentTime){
        $("#2").addClass("past");
    } else if(Two > currentTime){
        $("#2").addClass("future");}   
    //3
    if(Three === currentTime){
        $("#3").addClass("present");
    } else if(Three < currentTime){
        $("#3").addClass("past");
    } else if(Three > currentTime){
        $("#3").addClass("future");}
    //4
    if(Four === currentTime){
        $("#4").addClass("present");
    } else if(Four < currentTime){
        $("#4").addClass("past");
    } else if(Four > currentTime){
        $("#4").addClass("future");}  
    //5
    if(Five === currentTime){
        $("#5").addClass("present");
    } else if(Five < currentTime){
        $("#5").addClass("past");
    } else if(Five > currentTime){
        $("#5").addClass("future");}           
}

//Save Button On Click
saveButton.on("click", function(event){
    event.preventDefault();

    var userEvent = $(".block-event").val();
    var userEventTen = $(".block-event-10").val();
    var userEventEleven = $(".block-event-11").val();
    var userEventNoon = $(".block-event-12").val();
    var userEventOne = $(".block-event-1").val();
    var userEventTwo = $(".block-event-2").val();
    var userEventThree = $(".block-event-3").val();
    var userEventFour = $(".block-event-4").val();
    var userEventFive = $(".block-event-5").val();

    localStorage.setItem("userEvent", userEvent);
    localStorage.setItem("userEventTen", userEventTen);
    localStorage.setItem("userEventEleven", userEventEleven);
    localStorage.setItem("userEventNoon", userEventNoon);
    localStorage.setItem("userEventOne", userEventOne);
    localStorage.setItem("userEventTwo", userEventTwo);
    localStorage.setItem("userEventThree", userEventThree);
    localStorage.setItem("userEventFour", userEventFour);
    localStorage.setItem("userEventFive", userEventFive);

    console.log("submitted")
    renderUserEvents();
})
// Render Timeblock Events
function renderUserEvents() {
    var userEvent = localStorage.getItem("userEvent");
    var userEventTen = localStorage.getItem("userEventTen");
    var userEventEleven = localStorage.getItem("userEventEleven");
    var userEventNoon = localStorage.getItem("userEventNoon");
    var userEventOne = localStorage.getItem("userEventOne");
    var userEventTwo = localStorage.getItem("userEventTwo");
    var userEventThree = localStorage.getItem("userEventThree");
    var userEventFour = localStorage.getItem("userEventFour");
    var userEventFive = localStorage.getItem("userEventFive");
    $("#9").text(userEvent);
    $("#10").text(userEventTen);
    $("#11").text(userEventEleven);
    $("#12").text(userEventNoon);
    $("#1").text(userEventOne);
    $("#2").text(userEventTwo);
    $("#3").text(userEventThree);
    $("#4").text(userEventFour);
    $("#5").text(userEventFive);
}
// Functions
setTimeBlockValue();
renderUserEvents();