import "./mainplayer.css";
import { createElement } from "../../utils/elements";
import repeatSrc from "../../assets/repeat.svg";

export const createIconElement = () => {
  const repeatIcon = createElement("img", {
    src: repeatSrc,
    alt: "Repeat",
  });

  const repeatText = createElement("p", {
    innerText: "Repeat",
  });

  const repeatButton = createElement("button", {
    children: [repeatIcon, repeatText],
  });

  return repeatButton;
};
