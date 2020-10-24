import "./action.css";
import { createElement } from "../../utils/elements";
import backActionSrc from "../../assets/back.svg";
import StartActionSrc from "../../assets/playaction.svg";
import skipActionSrc from "../../assets/skip.svg";
import pauseActionSrc from "../../assets/pause.svg";

export const createActionElement = () => {
  const backAction = createElement("img", {
    src: backActionSrc,
  });
  const startAction = createElement("img", {
    src: StartActionSrc,
  });

  const skipAction = createElement("img", {
    src: skipActionSrc,
  });
  const audioElement = new Audio(
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Happy_Music/Scott_Holmes_-_01_-_Our_Big_Adventure.mp3"
  );

  const ActionElement = createElement("div", {
    className: "Actionbar",
    children: [
      createElement("button", {
        className: "back__button",
        children: [backAction],
        onclick: () => {
          alert("Back");
        },
      }),
      createElement("button", {
        className: "start__button",
        children: [startAction],
        onclick: () => {
          if (!audioElement.paused) {
            audioElement.pause();
            setPlayIcon(startAction);
          } else {
            audioElement.play();
            setPauseIcon(startAction);
          }
        },
      }),
      createElement("button", {
        className: "skip__button",
        children: [skipAction],
        onclick: () => {
          alert("Skip");
        },
      }),
    ],
  });

  return ActionElement;
};

export const setPlayIcon = (element) => {
  element.src = StartActionSrc;
  element.alt = "Play";
};
export const setPauseIcon = (startActionElement) => {
  startActionElement.src = pauseActionSrc;
  startActionElement.alt = "Pause";
};
