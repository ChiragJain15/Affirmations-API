const textbox = document.getElementById("main_heading");

 let affirmation =
  affirmations[Math.floor(Math.random() * affirmations.length)];
textbox.innerHTML = affirmation;

const burst = new mojs.Burst({
    scale: 2,
    count: 10 
});


document.addEventListener("click", function (e) {
  burst.replay();
  affirmation =
  affirmations[Math.floor(Math.random() * affirmations.length)];
textbox.innerHTML = affirmation;

});
