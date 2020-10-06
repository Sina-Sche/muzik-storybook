import "./button.css";
import Primary from "./button-primary.html";
import Secondary from "./button-secondary.html";
import Tertiary from "./button-tertiary.html";

export default { title: "Components/Button" };

export const withPlay = () => Primary;
export const withShare = () => Secondary;
export const withFavorite = () => Tertiary;
