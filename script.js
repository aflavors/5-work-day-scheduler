var currentTime = moment().hours();
var hour = new Date();
var timeBlock = $("")
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
    
    console.log(Ten, Eleven, Noon, One, Two, Three, Four, Five);
    
    if(Nine === currentTime){
        $("#9").addClass("present");
    } else if(Nine < currentTime){
        $("#9").addClass("past");
    } else if(Nine > currentTime){
        $("#9").addClass("future");}
    
}

setTimeBlockValue();

// var timeBlockHour = parseInt($("#time-block").text());
// // console.log(timeBlockHour);

// $('textarea').each(function(i){
//     // Performs tasks to each of the links
//     $(this).addClass("present");
//     console.log(this);
// });

//    $.each(timeBlockObj, function(timeKey, timeValue){
//         // console.log(timeKey);
//         // console.log(timeValue);
        
//     });


//.each function() psuedocode
//Loop through each div with class .hour
// add class .present to <textarea> if ...
    // timeBlockHour === currentTime
// add class .past to <textarea> if ...
    // timeBlockHour < currentTime
// add class .future to <textarea> if ...
    // timeBlockHour > currentTime

//Display Past, Present, and Future Classes
// if(timeBlockHour === currentTime){
//     $("textarea").addClass("present");
//     console.log("Current time");
// }if(timeBlockHour < currentTime){
//     //$("textarea").removeClass("present");
//     $("textarea").addClass("past");
//     console.log("Past time");
// }