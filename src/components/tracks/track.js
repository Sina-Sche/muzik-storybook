import "./track.css";
import playActionSrc from "../../assets/playaction.svg";
import pauseActionSrc from "../../assets/pause.svg"
import {createElement} from "../../utils/elements"; 

export const createTrackElement = (track) => {
  const audioElement = new Audio (track.audioSrc);
  const playActionElement = createElement ("img", {
    src: playActionSrc,
  });

  const trackElement = createElement("div", {
    className: "track",
    children: [
    createElement("img", {
      className: "track__image",
      src: track.imgSrc,
      alt: `Image of ${track.artist}`,
    }),
    createElement("div", {
      className: "track__description",
      children: [
        createElement("h3", {
          innerText: track.title,
        }),
        createElement("p", {
          innerText: track.artist,
        }),
      ],
    }),
    createElement("button", {
      className: "track__button", 
      children: [playActionElement],
      onclick: () => {
        if (!audioElement.paused) {
          audioElement.pause();
          showPlayIcon(playActionElement);
        } else {
          audioElement.play();
          showPauseIcon(playActionElement);
        }
          },
      }),
    ],
    });

  return trackElement;
  


//     const trackElement = document.createElement("div"); 
    // trackElement.className = "track";

  //   const trackDescription = document.createElement ("div");
  //   trackDescription.className = "track__description";
      
  //   const titleElement = document.createElement("h3"); 
  //   titleElement.innerText = track.title; 
  //   titleElement.className = "titleName";

  //   const artistElement = document.createElement("p");
  //   artistElement.innerText = track.artist; 
  //   artistElement.className = "artistName"; 


  //   const imgElement = document.createElement ("img");
  //   imgElement.src = track.imgSrc;
  //   imgElement.alt = `Image of ${track.artist}`;
  //   imgElement.className ="track__image";

  //   const buttonElement = document.createElement ("button");
  //   buttonElement.className = "action__button"; 
    
  //   const playActionElement = document.createElement ("img");   
  //   playActionElement.className = "play__element";
  //   playActionElement.src = playActionSrc;
     
  //   trackElement.append(imgElement,trackDescription,buttonElement);
  //   trackDescription.append(titleElement, artistElement);
  //   buttonElement.append(playActionElement);

     
  //  const audioElement = new Audio(track.audioSrc);
 
  //  buttonElement.onclick = function () {   
  //  if (!audioElement.paused) {
  //    audioElement.pause();
  //    showPlayIcon(playActionElement);    
  // }
  //   else {
  //     audioElement.play();
  //     showPauseIcon(playActionElement);
  //   }
  //  };
  
  
  //   return trackElement;
 }
  const showPlayIcon = (element) => {
    element.src = playActionSrc;    
    element.alt = "Play Icon";
  };
  const showPauseIcon = (element) => {
    element.src = pauseActionSrc;
    element.alt = "Pause Icon";
  };

