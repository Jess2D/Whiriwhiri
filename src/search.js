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
    card.classList.add("card");
    results.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let hide = document.createElement("div");
    hide.classList.add("hide");
    cardBody.appendChild(hide);
    hide.setAttribute("id", element.type);

    let title = document.createElement("div");
    title.classList.add("card-title");
    title.classList.add("title");
    title.innerText = element.type;
    cardBody.appendChild(title);

    let pax = document.createElement("div");
    pax.classList.add("card-text");
    pax.classList.add("pax");
    pax.innerText =
      element["min-people"] + "-" + element["max-people"] + " people";
    cardBody.appendChild(pax);

    let price = document.createElement("div");
    price.classList.add("price");
    price.innerText = element.price;
    cardBody.appendChild(price);

    let night = document.createElement("div");
    night.classList.add("night");
    night.innerText =
      element["min-night"] +
      " min nights - " +
      element["max-night"] +
      " max nights";
    cardBody.appendChild(night);
  });
};
