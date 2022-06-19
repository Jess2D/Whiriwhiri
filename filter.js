const accomodation = [
  {
    type: "Hotel",
    "min-people": "1",
    "max-people": "2",
    price: "$157/night",
    "min-night": "1",
    "max-night": "5",
  },
  {
    type: "Hostel",
    "min-people": "1",
    "max-people": "1",
    price: "$30/night",
    "min-night": "1",
    "max-night": "10",
  },
  {
    type: "Motel",
    "min-people": "2",
    "max-people": "4",
    price: "$90/night",
    "min-night": "3",
    "max-night": "10",
  },
  {
    type: "House",
    "min-people": "1",
    "max-people": "4",
    price: "$240/night",
    "min-night": "2",
    "max-night": "15",
  },
];

let select = document.getElementById("type");
for (let i = 0; i < accomodation.length; i++) {
  let option = document.createElement("option");
  option.value = accomodation[i].type;
  option.textContent = accomodation[i].type;
  select.appendChild(option);
}

let results = document.getElementById("results");

accomodation.map((elemnt) => {
  let card = document.createElement("div");
  card.classList.add("card");
  results.appendChild(card);

  let title = document.createElement("div");
  title.classList.add("title");
  title.innerText = elemnt.type;
  card.appendChild(title);

  let pax = document.createElement("div");
  pax.classList.add("pax");
  pax.innerText = elemnt["min-people"] + "-" + elemnt["max-people"] + " people";
  card.appendChild(pax);

  let price = document.createElement("div");
  price.classList.add("price");
  price.innerText = elemnt.price;
  card.appendChild(price);

  let night = document.createElement("div");
  night.classList.add("night");
  night.innerText =
    elemnt["min-night"] +
    " min nights - " +
    elemnt["max-night"] +
    " max nights";
  card.appendChild(night);
});
