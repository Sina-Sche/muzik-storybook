import "./mainplayer.css";
import { createElement } from "../../utils/elements";
import shuffleSrc from "../../assets/shuffle.svg";

export const createIconElement = () => {
  const shuffleIcon = createElement("img", {
    src: shuffleSrc,
    alt: "Shuffle",
  });

  const shuffleText = createElement("p", {
    innerText: "Shuffle",
  });

  const shuffleButton = createElement("button", {
    children: [shuffleIcon, shuffleText],
  });

  return shuffleButton;
};
