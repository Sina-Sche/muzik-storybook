import { createTrackElement } from "./track";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const billieJean = () => createTrackElement("Billie Jean", "Michael Jackson");
export const dontstopBelievin = () => createTrackElement("Don't stop believin", "Journey");
export const hopelessWanderer = () => createTrackElement("Hopeless Wanderer", "Mumford and Sons");
export const herecomestheSun = () => createTrackElement("Here comes the Sun", "The Beatles");