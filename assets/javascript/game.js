let randomMin = 19;
let randomMax = 120;
let crystalMin = 1;
let crystalMax = 12;
let wins = 0;
let losses = 0;
let crystal1;
let crystal2;
let crystal3;
let crystal4;
let playerScore = 0;
reset(); // suggested that the reset be up top my tutor, eliminate the use of wrinting the functions 2x

function checkWin() {
  //match statement
  if ((playerScore == random)) {
    wins++;
    update(1);
    reset();
    console.log('win');
  }
  if ((playerScore > random)) {
    losses++;
    update(1);
    reset();
    console.log('loser');

  }
}

//update function was worked through in after class hours, I originallt had the innerHTML
function update() {
  const html =
    "<p>Random: " + random + "</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Player Score: " + playerScore + "</p>"

  //document.querySelector('#crystalGame').innerHTML = html;
  $('.crystalGame').html(html)
} //ICEBOX talk about template literals

//reset update player score and random, but retain values of wins and losses.
function reset() {
  playerScore = 0;

  crystalArray = [crystal1, crystal2, crystal3, crystal4, ]

  crystalArray.forEach(function (value, index) {
    value = Math.floor(Math.random() * (crystalMax - crystalMin)) + crystalMin
    console.log(`Crystal${index+1}: ${value}`); //worked through this with my tutor the for each to not write out individually
    document.getElementById(`gem${index+1}`).onclick = function () {
      playerScore += value;
      update();
      checkWin();
    }

  })

  //leveraged from last HW assignment
  random = Math.floor(Math.random() * (+randomMax - +randomMin)) + +randomMin;
  update();
  console.log("Random Number Generated : " + random);
  //note with console log to validate, kept in there to easily test  
  console.log("comp guess reset", random);
}
