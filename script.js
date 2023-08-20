  const buttonA = document.getElementById("buttonA");
  const buttonB = document.getElementById("buttonB");
  const buttonC = document.getElementById("buttonC");
  const buttonD = document.getElementById("buttonD");
  const buttonE = document.getElementById("buttonE");
  const buttonF = document.getElementById("buttonF");
  const buttonG = document.getElementById("buttonG");

  const soundA = document.getElementById("soundA");
  const soundB = document.getElementById("soundB");
  const soundC = document.getElementById("soundC");
  const soundD = document.getElementById("soundD");
  const soundE = document.getElementById("soundE");
  const soundF = document.getElementById("soundF");
  const soundG = document.getElementById("soundG");

  window.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "a":
      case "A":
        soundA.play();
        break;
      case "b":
      case "B":
        soundB.play();
        break;
      case "c":
      case "C":
        soundC.play();
        break;
      case "d":
      case "D":
        soundD.play();
        break;
      case "e":
      case "E":
        soundE.play();
        break;
      case "f":
      case "F":
        soundF.play();
        break;
      case "g":
      case "G":
        soundG.play();
        break;
    }
  });