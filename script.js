function calculo() {
  const day = document.getElementById("dd").value;
  const month = document.getElementById("mm").value;
  const year = document.getElementById("yy").value;

  const birthDateMs = new Date(`${year}-${month}-${day}`).getTime();
  const todayMs = new Date().getTime();
  const miliSecondsDay = 24 * 60 * 60 * 1000;

  const datesDifferenceMs = todayMs - birthDateMs;
  const daysDifference = datesDifferenceMs / miliSecondsDay;

  const years = Math.floor(daysDifference / 365);
  const remainingDays = daysDifference % 365;
  const months = Math.floor(remainingDays / 30);
  const days = Math.floor(remainingDays % 30);

  console.log({
    years,
    months,
    days,
  });

  const resultDay = document.getElementById("result-days");
  const resultMonth = document.getElementById("result-months");
  const resultYear = document.getElementById("result-years");

  resultDay.innerText = days;
  resultMonth.innerText = months;
  resultYear.innerText = years;
}
