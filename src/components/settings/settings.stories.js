import "./settings.css";
import display from "./display.html";
import volume from "./volume.html";
import headset from "./headset.html";
import lockscreen from "./lockscreen.html";

export default { title: "Components/Settings" };

export const Display = () => display;
export const Volume = () => volume;
export const Headset = () => headset;
export const Lockscreen = () => lockscreen;
