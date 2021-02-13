//Pull current date and time
$("#date-today").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm a"));

//Pulls information previously put into local storage and puts it into corresponding areas
function localStorageFunction() {
  $("#text-entry1").val(localStorage.getItem("9AM"));
  $("#text-entry2").val(localStorage.getItem("10AM"));
  $("#text-entry3").val(localStorage.getItem("11AM"));
  $("#text-entry4").val(localStorage.getItem("12PM"));
  $("#text-entry5").val(localStorage.getItem("1PM"));
  $("#text-entry6").val(localStorage.getItem("2PM"));
  $("#text-entry7").val(localStorage.getItem("3PM"));
  $("#text-entry8").val(localStorage.getItem("4PM"));
  $("#text-entry9").val(localStorage.getItem("5PM"));
}

// Functions to pull and push data in and out of local storage to create planner
localStorageFunction();

//Button click function that saves information to local storage
$("button").on("click", function (event) {
  event.preventDefault();

  localStorage.setItem("9AM", $("#text-entry1").val());
  localStorage.setItem("10AM", $("#text-entry2").val());
  localStorage.setItem("11AM", $("#text-entry3").val());
  localStorage.setItem("12PM", $("#text-entry4").val());
  localStorage.setItem("1PM", $("#text-entry5").val());
  localStorage.setItem("2PM", $("#text-entry6").val());
  localStorage.setItem("3PM", $("#text-entry7").val());
  localStorage.setItem("4PM", $("#text-entry8").val());
  localStorage.setItem("5PM", $("#text-entry9").val());
});

//Change box color according to if the time is present, past, or yet to come
function changeBoxColor() {
  let currentTime = moment().hours();
  $(".col-sm-1").each(function () {
    //I set ID's in the HTML to their corresponding military time and then ref. them see if they are equal, greater, or less than the actual time and then reflect the color accordingly
    var setHour = $(this).attr("id");

    if (setHour < currentTime) {
      $(this).addClass("past");
    } else if (setHour == currentTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
changeBoxColor();