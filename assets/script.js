
//Set current date and time 
setInterval(

    function(){
        let $currentDay = $("#currentDay")
        $("#currentDay").text(moment().format("MMM Do, YYYY, HH:mm:ss"));
},1000)
;




