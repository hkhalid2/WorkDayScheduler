$(document).ready(function(){
    //displays current day
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //check and adjusts each time block element depending on present hour
    //and adjusts each block to past, present or future depending on this.
    function hourChecker() { 

        var currHour = moment().hours();
    
        $(".time-block").each(function() {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
          if(currHour > blockHour) {
            $(this).addClass("past");
          }

          else if(currHour === blockHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          }

          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
          
        });
      }

    hourChecker();

  //listen for save button clicks and save inputted values to LocalStorage
  $(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    var dateAdded = moment().format("dddd, MMMM Do");

    events.push({description: value, time: time, date: dateAdded});

    localStorage.setItem("events", JSON.stringify(events));
    
  });

  
    
});