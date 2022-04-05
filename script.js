`use strict`;
const loadUser = () => {
  fetch(`https://randomuser.me/api/`)
    .then((Response) => Response.json())
    .then((body) => {
      console.log(body.results);
      for (let i = 0; i < body.results.length; i++) {
        console.log(body.results[i].name.first);
        const newEl = `<div class="card col-12">
<img src="${body.results[i].picture.large}" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${
    body.results[i].name.first + " " + body.results[i].name.last
  }</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
        document.querySelector(`.row`).innerHTML += newEl;
      }
    });
};
document.querySelector(`h1`).addEventListener(`click`, loadUser);
// // dom manipulation
/*console.log(body.results);
const newEl = `<div class="card col-12">
<img src="" class="card-img-top" alt="">
<div class="card-body">
  <h5 class="card-title">${
    body.results.name.first + body.results.name.last
  }</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
document.querySelector(`.row`).innerHTML += newEl;*/
