const textbox = document.getElementById("main_heading");
const affirmation =
  affirmations[Math.floor(Math.random() * affirmations.length)];
textbox.innerHTML = affirmation;
