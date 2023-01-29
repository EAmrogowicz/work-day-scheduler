const currentDay = moment().format("dddd, MMMM Do");
const currentTime = moment().hour();

const timeBlockEl = $(".time-block");
const businessHours = 12;

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

$("#currentDay").text(currentDay);

// downloads data from local storage
let schedule = JSON.parse(localStorage.getItem("schedule"));

if (schedule == null || schedule.day !== currentDay) {
  schedule = {
    day: currentDay,
    hourPlans: Array(businessHours),
  };
}

for (let i = 0; i < businessHours; i++) {
  // Create a new `<div>` for each ability and its text content
  const divEl = $("<div>").addClass("row");

  const divTimeEl = $("<div>").addClass("col-2 cell hour");
  let plannerTime = i + 9;
  const plannerTimePrint = [i + 9] + ":00";
  divTimeEl.text(plannerTimePrint);

  const divTextEl = $("<div>").addClass("col-9 description");

  checkHour(plannerTime, divTextEl);

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

  saveBtnEl.on("click", function (e) {
    e.preventDefault();

    // select form element and get its value
    const inputValue = inputTextEl.val();
    schedule.hourPlans[i] = inputValue;

    localStorage.setItem("schedule", JSON.stringify(schedule));
  });
}
