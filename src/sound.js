/**
 *  사용되어질 사운드가 여기에 모여있다.
 */
const carrotSound = new Audio("./sound/carrot_pull.mp3");
const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

export function playCarrot() {
  playSound(carrotSound);
}

export function playBug() {
  playSound(bugSound);
}
export function playBackground() {
  playSound(bgSound);
}
export function stopBackground() {
  stopSound(bgSound);
}
export function playWin() {
  playSound(winSound);
}
export function playAlert() {
  playSound(alertSound);
}

function playSound(sound) {
  sound.carrotTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
