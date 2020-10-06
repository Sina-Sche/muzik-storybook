import "./button.css";
import primaryText from "./button-primary-text.html";
import primaryLogo from "./button-primary-logo.html";
import secondaryText from "./button-secondary-text.html";
import secondaryLogo from "./button-secondary-logo.html";
import tertiaryText from "./button-tertiary-text.html";
import tertiaryLogo from "./button-tertiary-logo.html";

export default { title: "Components/Button" };

export const withText = () => primaryText;
export const withLogo = () => primaryLogo;
export const withsecondaryText = () => secondaryText;
export const withsecondaryLogo = () => secondaryLogo;
export const withtertiaryText = () => tertiaryText;
export const withtertiaryLogo = () => tertiaryLogo;
