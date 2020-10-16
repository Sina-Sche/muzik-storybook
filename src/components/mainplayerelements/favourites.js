import "./mainplayer.css";
import { createElement } from "../../utils/elements";
import favouritesSrc from "../../assets/favourites.svg";

export const createIconElement = () => {
  const favouritesIcon = createElement("img", {
    src: favouritesSrc,
    alt: "Favourites",
  });

  const favouritesText = createElement("p", {
    innerText: "Favourites",
  });

  const favouritesButton = createElement("button", {
    children: [favouritesIcon, favouritesText],
  });

  return favouritesButton;
};
