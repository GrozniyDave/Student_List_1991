"use strict";

window.addEventListener("DOMContentLoaded", getJSON);

const Template = document.querySelector("#TempNames").content;
const parent = document.querySelector(".list-area");

function getJSON() {
  fetch("students1991.json")
    .then(e => e.json())
    .then(displayList);
}

function displayList(data) {
  data.forEach(hero => {
    const clone = Template.cloneNode(true);
    const name = hero.fullname;
    const house = hero.house;

    clone.querySelector(".Name").textContent = name;
    clone.querySelector(".House").textContent = house;
    clone.querySelector("img").src = getImg(hero.house);

    parent.appendChild(clone);
  });
}

function getImg(house) {
  if (house === "Hufflepuff") {
    return "https://vignette.wikia.nocookie.net/csydes-test/images/e/ee/Hufflepuff_Crest.png/revision/latest?cb=20171101063214";
  } else if (house === "Gryffindor") {
    return "https://vignette.wikia.nocookie.net/jspotter/images/e/e2/Gryffindor_House_Crest.png/revision/latest?cb=20140720030308";
  } else if (house === "Ravenclaw") {
    return "https://vignette.wikia.nocookie.net/csydes-test/images/2/2b/Ravenclaw_Crest.png/revision/latest?cb=20171101063206";
  } else {
    return "https://vignette.wikia.nocookie.net/csydes-test/images/4/45/Slytherin_Crest.png/revision/latest?cb=20171101063219";
  }
}
