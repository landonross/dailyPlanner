//Variables used to access and edit daily planner
let workDay = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
  };

  //Wait to run the JS code until the page is loaded

  $(document).ready(function(){
    if(!localStorage.getItem('workDay')) {
      updateCalendarTasks(workDay);
    } else {
      updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
    }
  })

//Pull current date and time
  $("#date-today h6").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY, h:mm"));

//Once the time has passed, change the color of the time box to the preset css code colors
  let counter = 1;
  for(const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let timeId = "#time" + counter;
    let presentHour = moment().hour();
    let timeString = $(timeId).text();
    let timeNumber = hourNumberFromHourString(timeString);  
    if(timeNumber < presentHour) {
      $(textEntry).addClass("past");
    } else if (timeNumber > presentHour) {
      $(textEntry).addClass("future");
    } else {
      $(textEntry).addClass("present");
    }
    counter ++;
  }

  //Converts the string time selections in HTML to numbers so the code can pull from them and edit the planner according to what time it is
  function hourNumberFromHourString(hourString) {
      switch(hourString) {
        case "8 AM": return 8;
        case "9 AM": return 9;
        case "10 AM": return 10;
        case "11 AM": return 11;
        case "12 PM": return 12;
        case "1 PM": return 13;
        case "2 PM": return 14;
        case "3 PM": return 15;
        case "4 PM": return 16;
        case "5 PM": return 17;
      }
    }
  

//store the information provided by client into the localstorage and be able to pull it back out when needed
$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    
    saveSchedule(hourString, value);
  });


// $("#save").click(function() {
//        alert($("#text-entry1").val());
//     })

// var getValue = $('#text-entry').val();
// $('#txt_name').val(getValue);

  function initializeLocalStorage() {
    localStorage.setItem('workDay', JSON.stringify(workDay));
  };
  
  function saveToLocalStorage(dayObj) {
    localStorage.setItem('workDay', JSON.stringify(dayObj));
  }
  
  function saveSchedule(hourString, val) {
    if(!localStorage.getItem('workDay')) {
      initializeLocalStorage();
    }
  
    let workHours = JSON.parse(localStorage.getItem('workDay'));
    workHours[hourString] = val
  
    saveToLocalStorage(workHours);
  }

  function updateCalendarTasks(dayObject) {
    $(".calendar-row").each(function(index) {
      let res = $(this).children("div");
      $(this).children("textarea").text(dayObject[res.text()]);
    })
  }






// https://github.com/sguitjens/homework5