/**
 * 게임을 만들고 배너(팝업을 연결한다)
 */

"use strick";
import PopUp from "./popup.js";
import * as sound from "./sound.js";
import { GameBuilder, Reason } from "./game.js";

const gameFinishBanner = new PopUp();

const game = new GameBuilder()
  .gameDuration(5)
  .carrotCount(3)
  .bugCount(3)
  .build();
game.setGameStopListener(reason => {
  console.log(reason);
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay?😜";
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST";
      sound.playBug();
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});
gameFinishBanner.setClickListener(() => {
  game.start();
});
