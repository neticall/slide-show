let positionBack = 1
const progressBar = document.querySelector('.progressBar')
const background = document.querySelector('.background')
const numberImage = 17

function setBackground(bool) {
  if (bool === 'right') {
    positionBack === numberImage ? positionBack = 1 : positionBack++
  } else {
    positionBack === 1 ? positionBack = numberImage : positionBack--
  }
  background.src = "images/img (" + positionBack + ").webp";
  progressBar.style.width = 100 / numberImage * positionBack + '%'
}

document.onkeydown = function (event) {
  event.key === "ArrowLeft" ? setBackground('left') : false
  event.key === "ArrowRight" ? setBackground('right') : false
};