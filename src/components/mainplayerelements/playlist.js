import "./mainplayer.css";
import { createElement } from "../../utils/elements";
import playlistSrc from "../../assets/playlist.svg";

export const createIconElement = () => {
  const playlistIcon = createElement("img", {
    src: playlistSrc,
    alt: "Playlist",
  });

  // const shuffleIcon = createElement("img", {
  //   src: shuffleSrc,
  //   alt: "Shuffle",
  // });
  // const repeatIcon = createElement("img", {
  //   src: repeatSrc,
  //   alt: "Repeat",
  // });
  // const eqIcon = createElement("img", {
  //   src: eqSrc,
  //   alt: "EQ",
  // });
  // const favouriteIcon = createElement("img", {
  //   src: favouritesSrc,
  //   alt: "Favourites",
  // });

  const playlistText = createElement("p", {
    innerText: "Playlist",
  });

  const playlistButton = createElement("button", {
    className: "playlist__button",
    children: [playlistIcon, playlistText],
  });

  return playlistButton;
};
