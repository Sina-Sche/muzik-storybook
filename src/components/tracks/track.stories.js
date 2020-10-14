import { createTrackElement } from "./track";
import michaelJacksonSrc from "../../assets/michael.png";

export default {
  title: "Components/Track",
  parameters: { layout: "centered" },
};

// export const billieJean = () => createTrackElement({
//   title: "Billie Jean", 
//   artist: "Michael Jackson",
//   imgSrc: michaelJacksonSrc,
//   audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Algorithms.mp3"
// ,});
// export const dontstopBelievin = () => createTrackElement({
//   title: "Don't stop believin", 
//   artist: "Journey",
//   imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jXfKR0Wp1X9cEsHhxyQYiQAAAA%26pid%3DApi&f=1",
//   audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/Solar/Derek_Clegg_-_12_-_Annalise.mp3",});
//   export const hopelessWanderer = () => createTrackElement({
//     title: "Hopeless Wanderer", 
//     artist: "Mumford and Sons",
//     imgSrc: "http://img2-ak.lst.fm/i/u/174s/7142e584624346a1b3d8bb045ac0a7b6.png",
//     audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_05_-_Little_Idea.mp3",});
// export const herecomestheSun = () => createTrackElement({
//   title:"Here comes the Sun", 
//   artist: "The Beatles",
//   imgSrc: "http://www.delta.ro/beatles/gif/sglbeat160x154.gif",
//   audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/KieLoKaz/Free_Ganymed/KieLoKaz_-_01_-_Reunion_of_the_Spaceducks_Kielokaz_ID_365.mp3",});

  export const songs = () => {
    const BillieJeanTrack = {title: "Billie Jean", 
    artist: "Michael Jackson",
    imgSrc: michaelJacksonSrc,
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Algorithms.mp3",}
    const dontstopBelievinTrack = {title: "Don't stop believin'", 
    artist: "Journey",
    imgSrc: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jXfKR0Wp1X9cEsHhxyQYiQAAAA%26pid%3DApi&f=1",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Derek_Clegg/Solar/Derek_Clegg_-_12_-_Annalise.mp3",}
    const hopelessWandererTrack = {title: "Hopeless Wanderer", 
    artist: "Mumford and Sons",
    imgSrc: "http://img2-ak.lst.fm/i/u/174s/7142e584624346a1b3d8bb045ac0a7b6.png",
    audioSrc: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes/Inspiring__Upbeat_Music/Scott_Holmes_-_05_-_Little_Idea.mp3",}

    const container = document.createElement('div');
    const playlist = [BillieJeanTrack, dontstopBelievinTrack, hopelessWandererTrack]
    playlist.forEach((track) => {
      const trackElement = createTrackElement(track);
      container.append(trackElement);
    });

    return container;
  };