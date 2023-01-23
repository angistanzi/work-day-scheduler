$("textarea").val(localStorage.getItem("9"));
//Set current date and time 
setInterval(

    function(){
        let $currentDay = $("#currentDay")
        $("#currentDay").text(moment().format("MMM Do, YYYY, HH:mm:ss"));
},1000);


$("button").on("click", function(){
   
let $taskEntered = $("textarea").val()
localStorage.setItem("9", $taskEntered);

});


let $timeBlock = $("p.data-time")
if ($timeBlock < moment().format("h")){

    $("textarea").addClass("future")

}else if ($timeBlock > moment().format("h")){

    $("textarea").addClass("past")

}else{
    $("textarea").addClass("present")
}
