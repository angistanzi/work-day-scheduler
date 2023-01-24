
//Set current date and time 
setInterval(

    function(){
        let $currentDay = $("#currentDay")
        $("#currentDay").text(moment().format("MMM Do, YYYY, HH:mm:ss"));
},1000);


$("button").on("click", function(e){
console.log($(e))
let $taskEntered = $("textarea").val()
localStorage.setItem("9", $taskEntered);
});



//Setting time block colors based on current time

let $timeBlock = $(".time-block")

for(i=0; i<$timeBlock.length; i++) {  
   
    let localStorageReference = $($timeBlock[i]).attr("data-time") 
    $($timeBlock[i]).val(localStorage.getItem(localStorageReference))

    
if (parseInt($($timeBlock[i]).attr("data-time")) < parseInt(moment().format("HH"))){

    $($timeBlock[i]).addClass("past")

}else if (parseInt($($timeBlock[i]).attr("data-time")) > parseInt(moment().format("HH"))){

    $($timeBlock[i]).addClass("future")

}else{

    $($timeBlock[i]).addClass("present")

}
};

