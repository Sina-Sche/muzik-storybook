import { createTrackElement } from "./track";
import playActionSrc from "../../assets/playaction.svg";
import michaelJacksonSrc from "../../assets/michael.png";



export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

export const billieJean = () => createTrackElement({
  title: "Billie Jean", 
  artist: "Michael Jackson",
  imgSrc: michaelJacksonSrc,
  audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Algorithms.mp3"
,});
export const dontstopBelievin = () => createTrackElement({
  title: "Don't stop believin", 
  artist: "Journey",
  imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dL7ecjsTGmmSqZmH1vVotgAAAA%26pid%3DApi&f=1",});
export const hopelessWanderer = () => createTrackElement({
  title: "Hopeless Wanderer", 
  artist: "Mumford and Sons",
  imgSrc: " "});
export const herecomestheSun = () => createTrackElement({
  title:"Here comes the Sun", 
  artist: "The Beatles",
  imgSrc: "",
  audioSrc: ""});