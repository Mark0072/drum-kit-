// Detectar clics en los botones
const drumButtons = document.querySelectorAll(".drum");

for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detectar pulsaciones de teclas
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Función para reproducir sonidos
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
  }
}

// Función para la animación de botones
function buttonAnimation(currentKey) {
  const activeButton = document.querySelector("." + currentKey);
  
  if (activeButton) {
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}