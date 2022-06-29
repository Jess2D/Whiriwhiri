const accomodation = [
  {
    type: "Hotel",
    "min-people": "1",
    "max-people": "2",
    price: "157",
    "min-night": "1",
    "max-night": "5",
    days: "4",
  },
  {
    type: "Hostel",
    "min-people": "1",
    "max-people": "1",
    price: "30",
    "min-night": "1",
    "max-night": "10",
    days: "9",
  },
  {
    type: "Motel",
    "min-people": "2",
    "max-people": "4",
    price: "90",
    "min-night": "3",
    "max-night": "10",
    days: "17",
  },
  {
    type: "House",
    "min-people": "1",
    "max-people": "4",
    price: "240",
    "min-night": "2",
    "max-night": "15",
    days: "13",
  },
];

const getResults = (filtered) => {
  filtered.map((element) => {
    let results = document.getElementById("results");
    let h3 = document.createElement("h3");
    h3.textContent = "Results";

    results.appendChild(h3);
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("bg-light");
    results.appendChild(card);

    let title = document.createElement("div");
    title.classList.add("card-header");
    title.innerText = element.type;
    card.appendChild(title);

    let hide = document.createElement("div");
    hide.classList.add("hide");
    title.appendChild(hide);
    hide.setAttribute("id", element.type);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    let pax = document.createElement("div");
    pax.classList.add("card-text");
    pax.classList.add("pax");
    pax.innerText =
      element["min-people"] + "-" + element["max-people"] + " people";
    cardBody.appendChild(pax);

    let price = document.createElement("div");
    price.classList.add("price");
    price.innerText = "$ " + element.price + " /nigth";
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

export { accomodation, getResults };
