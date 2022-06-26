import { accomodation } from "./accomodation.js";
let form = document.getElementById("button");
let TotalDays;
button.onclick = function (e) {
  e.preventDefault();
  $(".hide").remove();
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

const getResults = (filtered) => {
  filtered.map((element) => {
    let results = document.getElementById("results");

    let card = document.createElement("div");
    card.classList.add("hide");
    results.appendChild(card);
    card.setAttribute("id", element.type);

    let title = document.createElement("div");
    title.classList.add("title");
    title.innerText = element.type;
    card.appendChild(title);

    let pax = document.createElement("div");
    pax.classList.add("pax");
    pax.innerText =
      element["min-people"] + "-" + element["max-people"] + " people";
    card.appendChild(pax);

    let price = document.createElement("div");
    price.classList.add("price");
    price.innerText = element.price;
    card.appendChild(price);

    let night = document.createElement("div");
    night.classList.add("night");
    night.innerText =
      element["min-night"] +
      " min nights - " +
      element["max-night"] +
      " max nights";
    card.appendChild(night);
  });
};
