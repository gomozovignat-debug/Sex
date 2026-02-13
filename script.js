let noSize = 1;

let yesSize = 1;

const noBtn = document.getElementById("no");

const yesBtn = document.getElementById("yes");

const gif = document.getElementById("gif");

noBtn.addEventListener("click", () => {

  noSize *= 0.6;

  yesSize *= 1.4;

  noBtn.style.transform = `scale(${noSize})`;

  yesBtn.style.transform = `scale(${yesSize})`;

  if (noSize < 0.2) {

    noBtn.style.display = "none";

  }

});

yesBtn.addEventListener("click", () => {

  document.querySelector(".buttons").style.display = "none";

  document.getElementById("question").style.display = "none";

  gif.src = "https://files.catbox.moe/95km7k.gif";

  gif.style.display = "block";

});