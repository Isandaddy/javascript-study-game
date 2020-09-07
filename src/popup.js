/**
 * 팝업에 괸련된 것들
 */

"use strick";

export default class PopUp {
  //초기화
  constructor() {
    this.popup = document.querySelector(".pop-up");
    this.popupText = document.querySelector(".pop-up__massage");
    this.popupRefresh = document.querySelector(".pop-up__refresh");
    this.popupRefresh.addEventListener("click", () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popupText.innerText = text;
    this.popup.classList.remove("pop-up--hide");
  }

  hide() {
    this.popup.classList.add("pop-up--hide");
  }
}
