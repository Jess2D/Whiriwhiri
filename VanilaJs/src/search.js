import { accomodation, getResults } from "./accomodation.js";
let form = document.getElementById("button");
let TotalDays;
button.onclick = function (e) {
  e.preventDefault();
  $(".card").remove();
  $("h3").remove();

  let startDate = document.getElementById("in").value;
  let endDate = document.getElementById("out").value;
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);
  let difference = date2.getTime() - date1.getTime();
  TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

  const filteredAccomodation = accomodation.filter((element) => {
    return (
      element["min-night"] <= TotalDays && element["max-night"] >= TotalDays
    );
  });
  getResults(filteredAccomodation);
};
