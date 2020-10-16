import "./mainplayer.css";
import { createElement } from "../../utils/elements";
import eqSrc from "../../assets/eq.svg";

export const createIconElement = () => {
  const eqIcon = createElement("img", {
    src: eqSrc,
    alt: "Eq",
  });

  const eqText = createElement("p", {
    innerText: "EQ",
  });

  const eqButton = createElement("button", {
    children: [eqIcon, eqText],
  });

  return eqButton;
};
