$("textarea").val(localStorage.getItem("9a"));
//Set current date and time 
setInterval(

    function(){
        let $currentDay = $("#currentDay")
        $("#currentDay").text(moment().format("MMM Do, YYYY, HH:mm:ss"));
},1000);


$("button").on("click", function(){
   
let $taskEntered = $("textarea").val()
localStorage.setItem("9a", $taskEntered);

});



