//importing json object and method to show accomodation
import { accomodation, getResults } from "./accomodation.js";

/**
 * Creating the dropdown from object json Accomodations
 */
let select = document.getElementById("price");

select.onchange = () => {
  console.log(select.value);
  $(".card").remove();
  $("h3").remove();
  const filteredAccomodation = accomodation.filter((element) => {
    return element.price == select.value;
    console.log(select.value);
  });
  if (filteredAccomodation == null) {
    filteredAccomodation = accomodation;
  }

  getResults(filteredAccomodation);
  select.value = "none";
};
