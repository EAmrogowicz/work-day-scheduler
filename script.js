const currentDayEl = moment().format("dddd, MMMM Do");
const currentTimeEl = moment().hour();

const timeBlockEl = $(".time-block");
const businessHours = 12;

$("#currentDay").text(currentDayEl);

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
  inputTextEl.val(schedule[i]);

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
    schedule[i] = inputValue;
  });
}
