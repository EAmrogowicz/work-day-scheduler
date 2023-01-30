const currentDay = moment().format("dddd, MMMM Do");
const currentTime = moment().hour();

const timeBlockEl = $(".time-block");
const businessHours = 9;

// checks what time is to color the time blocks
const checkHour = (t, change) => {
  if (t === currentTime) {
    change.addClass("present");
  }
  if (t < currentTime) {
    change.addClass("past");
  }
  if (t > currentTime) {
    change.addClass("future");
  }
};

// prints current date
$("#currentDay").text(currentDay);

// downloads data from local storage
let schedule = JSON.parse(localStorage.getItem("schedule"));
// checks if there is something already saved in local storage
if (schedule == null || schedule.day !== currentDay) {
  schedule = {
    day: currentDay,
    hourPlans: Array(businessHours),
  };
}

// creates time blocks
for (let i = 0; i < businessHours; i++) {
  const divEl = $("<div>").addClass("row");

  const divTimeEl = $("<div>").addClass("col-2 cell hour");
  let plannerTime = i + 9;
  const plannerTimePrint = [i + 9] + ":00";
  divTimeEl.text(plannerTimePrint);

  const divTextEl = $("<div>").addClass("col-9 description");

  const inputTextEl = $("<input>").addClass("form");
  inputTextEl.val(schedule.hourPlans[i]);

  const divBtnEl = $("<div>").addClass("col-1 cell save");
  const saveBtnEl = $("<button>").addClass("saveBtn");
  const saveBtnI = $("<i>").addClass("bi bi-save2");

  divEl.append(divTimeEl);
  divEl.append(divTextEl);
  divTextEl.append(inputTextEl);
  divEl.append(divBtnEl);
  divBtnEl.append(saveBtnEl);
  saveBtnEl.append(saveBtnI);

  timeBlockEl.append(divEl);

  //runs function to check what hours is to color code the time blocks per each of the block
  checkHour(plannerTime, divTextEl);

  //event listener on click to save data to local storage
  saveBtnEl.on("click", function (e) {
    e.preventDefault();

    // select form element and get its value
    const inputValue = inputTextEl.val();
    schedule.hourPlans[i] = inputValue;

    localStorage.setItem("schedule", JSON.stringify(schedule));
  });
}
